import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Header from "../../elements/Header";
import FooterElement from "../../elements/Footer";
import { ContainerHome, ContainerWelcome, ContainerBanner } from "./styles";
import { baseUrl } from "../../baseurl";
import { useSettingTags } from "../../hooks/tagsFetch";
import {
  Header2,
  PopUp,
  PopUpButtonNo,
  PopUpButtonYes,
} from "../../styles/MasterStyles";
import { OfferCard } from "../../elements/OfferCard/offerCard";
import { reply } from "../../slices/acceptance/acceptanceSlice";
import { loading } from "../../elements/Statements/statements";
import barter_banner from "../../images/barter_banner.jpg";

//selectors
import { selectLanguage } from "../../store/selectors/selectors";

//use
import { setLanguageInSlice } from "../../slices/language/languageSlice";

import { useIntl } from "react-intl";

import { FormattedMessage } from "react-intl";

function Welcome() {
  const intl = useIntl();
  console.log(intl);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [tags, setTagsBackground] = useState([]);
  const tag = useSelector((state) => state.tags.tags);

  const [fetchingStatus, setFetchingStatus] = useState("noError");

  const acceptance = useSelector((state) => state.acceptance.acceptance);

  const [offersLatest10, setOffersLatest10] = useState([]);
  const storeLanguage = useSelector(selectLanguage);

  //language local state
  const [language, setLanguage] = useState(storeLanguage);

  //useEffect to be triggered when language is changed
  useEffect(() => {
    console.log("Entering use Effect for language on welcome page");
    setLanguage(storeLanguage);
    console.log(language);
  }, [storeLanguage]);

  useSettingTags();
  useEffect(() => {
    setTagsBackground(tag);
  }, [tag]);

  useEffect(() => {
    setFetchingStatus("noError");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/haves/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOffersLatest10(result.results);
      })
      .catch(() => {
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
      {acceptance === "notAnswered" && user.first_name === "NoNa" ? (
        <ContainerHome>
          <Header></Header>
          <div className="overlayer">
            <PopUp className="popUpWelcomePage">
              <div className="fontSize">
                Do you agree with the{" "}
                <Link to={"../admin/termsofuse"}>terms of use</Link> and with
                usage of cookies?
              </div>
              <div className="popUpButtonSection">
                <PopUpButtonYes className="fontSize" onClick={handleAgreement}>
                  Yes, I do.
                </PopUpButtonYes>
                <PopUpButtonNo
                  className="fontSize"
                  onClick={handleDisagreement}
                >
                  No, I don't.
                </PopUpButtonNo>
              </div>
            </PopUp>
          </div>
          <FooterElement></FooterElement>
        </ContainerHome>
      ) : acceptance === "no" ? (
        <ContainerHome>
          <Header></Header>
          <div className="overlayer">
            <PopUp className="popUpWelcomePage">
              <div className="fontSize">You can't use our service. 😢</div>
            </PopUp>
          </div>
          <FooterElement></FooterElement>
        </ContainerHome>
      ) : (
        <>
          <Header></Header>
          <ContainerBanner>
            <div className="leftSquare">
              <h4>
                <FormattedMessage id="welcome_banner_1" />
              </h4>
              <h4>
                <FormattedMessage id="welcome_banner_2" />
              </h4>
              <h2>
                <FormattedMessage id="welcome_banner_3" />
              </h2>
            </div>
            <div className="bannerContainer">
              <img className="banner" src={barter_banner} alt="barter_banner" />
            </div>
          </ContainerBanner>
          <ContainerWelcome>
            {offersLatest10 === "" ? (
              <div className="loading">{loading}</div>
            ) : (
              <div className="notLoading">
                <div className="latestOfferContainer">
                  <Header2>
                    <FormattedMessage id="header_2" />
                  </Header2>
                  {fetchingStatus === "error" ? (
                    <div>
                      <FormattedMessage id="errorFetchingOffers" />
                    </div>
                  ) : (
                    <div className="objects">
                      {offersLatest10.map((obj) => (
                        <OfferCard key={obj.id} obj={obj} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </ContainerWelcome>
          <FooterElement></FooterElement>
        </>
      )}
    </>
  );
}

export default Welcome;
