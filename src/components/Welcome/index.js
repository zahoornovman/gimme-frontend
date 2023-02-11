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


  const acceptance = useSelector((state) => state.acceptance.acceptance);

  const [offersLatest10, setOffersLatest10] = useState([]);


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
      })
      .catch((error) => {
        console.log("error", error);
        setFetchingStatus("error");
      });
  }, []);

  const handleAgreement = () => {

    dispatch(
      reply({
        reply: "yes",
      })
    );
  };

  const handleDisagreement = () => {
    dispatch(
      reply({
        reply: "no",
      })
    );
  };




  return (

    <>
      {
        acceptance === "notAnswered" && user.first_name === "NoNa"
          ?
          <ContainerHome>
            <Header></Header>
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
            <FooterElement></FooterElement>
          </ContainerHome>
          :
          acceptance === "no"
            ?
            <ContainerHome>
              <Header></Header>
              <div className="overlayer">
                <PopUp className="popUpWelcomePage">
                  <div className="fontSize">You can't use our service. 😢</div>
                </PopUp>
              </div>
              <FooterElement></FooterElement>
            </ContainerHome>
            :
            <ContainerWelcome>
              <Header></Header>
              {offersLatest10 === "" ?

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
                        {offersLatest10.map((obj) => (
                          <OfferCard key={obj.id} obj={obj} />
                        ))}
                      </div>
                    }
                  </div>


                </div>
              }


              <FooterElement></FooterElement>
            </ContainerWelcome>
      }
    </>
  );

}

export default Welcome;