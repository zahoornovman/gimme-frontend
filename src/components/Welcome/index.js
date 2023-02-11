import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Header from "../../elements/Header";
import FooterElement from "../../elements/Footer";
import { ContainerHome, ContainerWelcome } from "./styles";
import { baseUrl } from "../../baseurl";
//import { fetchingTags } from "../../slices/tags/tagsSlice";
import { useSettingTags } from "../../hooks/tagsFetch";
import {
  Header2,
  PopUp,
  PopUpButtonNo,
  PopUpButtonYes,
  TextButton,
} from "../../styles/MasterStyles";
import { OfferCard } from "../../elements/OfferCard/offerCard";
//import img_noPicture from "../../images/no_picture.jpeg"
import { reply } from "../../slices/acceptance/acceptanceSlice";



function Welcome() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tags, setTagsBackground] = useState([]);
  const tag = useSelector((state) => state.tags.tags);

  const [fetchingStatus, setFetchingStatus] = useState("noError");

  const [searchStatus, setSearchStatus] = useState("okay");
  const [searchResult, setSerachResult] = useState("notSearched");
  //const [acceptance, setAcceptance] = useState("notAnswered")
  const acceptance = useSelector((state) => state.acceptance.acceptance);

  const [offersLatest10, setOffersLatest10] = useState([]);
  const [offersLatest4to5, setOffersLatest4to5] = useState([]);

  useSettingTags();
  useEffect(() => {
    setTagsBackground(tag);
  }, [tag]);

  useEffect(() => {
    //var formdata = new FormData();
    setFetchingStatus("noError");
    var requestOptions = {
      method: "GET",
      //body: formdata,
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/haves`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        setOffersLatest10(result);
        const offersIndex3toIndex4 = [];
        for (let i = 3; i < 4; i++) {
          offersIndex3toIndex4.push(result[i]);
        }
        setOffersLatest4to5(offersIndex3toIndex4);
      })
      .catch((error) => {
        console.log("error", error);
        setFetchingStatus("error");
      });
  }, []);

  const handleAgreement = () => {
    //setAcceptance("yes")
    dispatch(
      reply({
        reply: "yes",
      })
    );
  };

  const handleDisagreement = () => {
    //setAcceptance("no")
    dispatch(
      reply({
        reply: "no",
      })
    );
  };

  const handleSearch = () => {
    setSearchStatus("okay");
    setSerachResult("notSearched");
    const keyWords = document.getElementById("searchKeyWords").value;
    const searchIn = document.getElementById("searchIn").value;
    if (keyWords === "") {
      setSearchStatus("noKeyWordGiven");
    } else {
      let searchURL = "";
      if (searchIn === "offers") {
        searchURL = `${baseUrl}/backend/api/haves/?title=${keyWords}`;
      } else {
        searchURL = `${baseUrl}/backend/api/wants/?title=${keyWords}`;
      }
      //var formdata = new FormData();

      var requestOptions = {
        method: "GET",
        //body: formdata,
        redirect: "follow",
      };
      fetch(`${searchURL}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.length === 0) {
            setSerachResult("noResult");
          } else {
            setSerachResult(result);
            setSearchStatus("match");
          }
        })
        .catch((error) => {
          console.log("error", error);
          setSearchStatus("error");
        });
    }
  };

  const handleExitSearchResults = () => {
    setFetchingStatus("noError");
    setSearchStatus("okay");
    setSerachResult("notSearched");
    //document.getElementById("searchKeyWords").innerText = "";
  };
  const handleClickedAllOffers = () => {
    handleExitSearchResults();
    navigate("/offers/all");
  };
  const handleClickedAllRequests = () => {
    handleExitSearchResults();
    navigate("/requests/all");
  };

  const handleNewSearchDismissSearchResults = () => {
    handleExitSearchResults();
  };


  return (

    <>
      {
        acceptance === "notAnswered" && user.first_name === "NoNa"
          ?
          <ContainerHome>
            <Header></Header>
            {offersLatest10 === ""
              ?
              <div className="loading">Loading. Please be patient. 😊</div>
              :
              <div className="notLoading">
                <div className="latestOfferContainer">
                  <Header2>Latest offers</Header2>
                  {fetchingStatus === "error"
                    ?
                    <div>
                      Latest offers can't be displayed at the moment. We apologise
                      for the inconvenience. 😖
                    </div>
                    :
                    <div className="objects">
                      {offersLatest4to5.map((obj) => (
                        <OfferCard key={obj.id} obj={obj} />

                      ))}
                    </div>
                  }
                </div>


              </div>
            }
            {acceptance === "notAnswered" ?

              <div className="overlayer">
                <PopUp className="popUpWelcomePage">
                  <div className="fontSize">
                    Do you agree with the{" "}
                    <Link to={"../admin/termsofuse"}>terms of use</Link> and with
                    usage of cookies?
                  </div>
                  <div>
                    <PopUpButtonYes className="fontSize" onClick={handleAgreement}>
                      Yes, I do.
                    </PopUpButtonYes>
                    <PopUpButtonNo className="fontSize" onClick={handleDisagreement}>
                      No, I don't.
                    </PopUpButtonNo>
                  </div>
                </PopUp>
              </div>

              :
              acceptance === "no"
                ?
                <div className="overlayer">
                  <PopUp className="popUpWelcomePage">
                    <div className="fontSize">You can't use our service. ??</div>
                  </PopUp>
                </div>
                :
                <></>
            }
            <FooterElement></FooterElement>
          </ContainerHome>
          :
          <ContainerWelcome>
            <Header></Header>
            {offersLatest10 === "" ? (
              <div className="loading">Loading. Please be patient. 😊</div>
            ) : (
              <div className="notLoading">
                {searchStatus === "match" ? (
                  <div className="searchMatch">
                    <div className="objects">
                      {searchResult.map((obj) => (
                        <OfferCard key={obj.id} obj={obj} />

                      ))}
                    </div>
                    <div className="searchResultButtons">
                      <TextButton onClick={handleNewSearchDismissSearchResults}>
                        New search
                      </TextButton>
                      <TextButton onClick={handleNewSearchDismissSearchResults}>
                        Discard search results
                      </TextButton>
                      <TextButton onClick={handleClickedAllOffers}>
                        All offers
                      </TextButton>
                      <TextButton onClick={handleClickedAllRequests}>
                        All requets
                      </TextButton>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="searchContainer">
                      <Header2>Search</Header2>
                      {searchStatus === "noKeyWordGiven" ? (
                        <div>
                          Please enter a key word and click on the search button
                          afterwards. 😜
                        </div>
                      ) : searchStatus === "error" ? (
                        <div>
                          Search is currently out of service. We apologise for the
                          inconvenience. 🙄 Please try again later.
                        </div>
                      ) : searchResult === "noResult" ? (
                        <div>No match. 😬</div>
                      ) : (
                        <></>
                      )}
                      <div>
                        <label className="fontSize" htmlFor="searchKeyWords">
                          Key words
                        </label>
                        <input id="searchKeyWords"></input>
                      </div>
                      <div>
                        <label className="fontSize" htmlFor="searchIn">
                          Search in
                        </label>
                        <select id="searchIn">
                          <option className="fontSize" value="offers">
                            offers
                          </option>
                          <option className="fontSize" value="requests">
                            requests
                          </option>
                        </select>
                      </div>
                      <TextButton className="fontSize" onClick={handleSearch}>
                        Search
                      </TextButton>
                    </div>
                    <div className="latestOfferContainer">
                      <Header2>Latest offers</Header2>
                      {fetchingStatus === "error" ? (
                        <div>
                          Latest offers can't be displayed at the moment. We apologise
                          for the inconvenience. 😖
                        </div>
                      )

                        : (
                          <div className="objects">
                            {offersLatest10.map((obj) => (
                              <OfferCard key={obj.id} obj={obj} />

                            ))}
                          </div>
                        )}
                    </div>
                  </>
                )}
              </div>
            )}


            <FooterElement></FooterElement>
          </ContainerWelcome>
      }
    </>
  );

}

export default Welcome;
