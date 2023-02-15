import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { Header2, PopUp, PopUpButtonNo, PopUpButtonYes, TextButton } from '../../../styles/MasterStyles';
import { ContainerOneOffer } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { lastPath } from '../../../slices/messages/messageSlice';
import { baseUrl } from '../../../baseurl';
import { useSelector } from 'react-redux';
import { useSettingTags } from '../../../hooks/tagsFetch';
import ConditionTranslation from '../../../elements/ConditionTranslation';
import StatusTranslation from '../../../elements/StatusTranslation';
import img_cheveronDoubleLeft from "../../../images/chevronDoubleLeft.svg"
import img_cheveronDoubleRight from "../../../images/chevronDoubleRight.svg"
import { loading, offerNotDisplayed } from '../../../elements/Statements/statements';

function OfferDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [offer, setOffer] = useState("");
  const { id } = useParams();
  const [imageDisplayed, setImageDisplayed] = useState(0)
  const [deletePopUp, setDeletePopUp] = useState("notDisplayed")



  const [tagsBackend, setTagsBackground] = useState([]);
  const tags = useSelector((state) => state.tags.tags);

  const user = useSelector((state) => state.user)

  useSettingTags();
  useEffect(() => {
    setTagsBackground(tags);
  }, [tags]);

  useEffect(() => {
    setOffer("")

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/haves/${id}/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setOffer(result)
      })
      .catch(error => {
        console.log('error', error)
        setOffer("error")
      });
  }, [])

  const handleMessagedClicked = () => {
    dispatch(
      lastPath({
        type: 'have',
        id: id,
      })
    );
    navigate('/message');
  };

  const handleRightCheveron = () => {
    setImageDisplayed(imageDisplayed + 1)
  }
  const handleLeftCheveron = () => {
    setImageDisplayed(imageDisplayed - 1)
  }

  const handleDeleteObject = () => {
    setDeletePopUp("displayed")
  }
  const handleExitDelete = () => {
    setDeletePopUp("notDisplayed")
  }
  const handleDeleteExecution = () => {
    setDeletePopUp("notDisplayed")

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.acces}`);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,     
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/haves/${id}/`, requestOptions)
      .then(
        (response) => {
          if (response.status < 300) {
            navigate("/offers/all")
          }
          else{
            setOffer("deletionFailed")
          }
        }
      )
      .catch(() => {
        setOffer("deletionFailed")

      });
  }

  return (
    <>
    <Header></Header>
    <ContainerOneOffer>
      
      {
        offer === ""
          ?
          <div>{loading}</div>
          :
          offer === "error"
            ?
            <div>{offerNotDisplayed}</div>
            :
            offer === "deletionFailed"
              ?
              <>
                <div>{`Deletion has failed. Please contact our backoffice with referring to offer ${offer.id}.`}</div>
                <TextButton
                  onClick={() => navigate("/admin/contact")}
                >Contact details</TextButton>
              </>
              :
              <>
                <Header2>{offer.title}</Header2>
                <div className='contentSection fontSize'>
                  {
                    offer.images.length === 0
                      ?
                      <></>
                      :
                      <div className='imageGallery'>
                        {
                          imageDisplayed === 0
                            ?
                            <></>
                            :
                            <img
                              className='cheveronButton'
                              onClick={handleLeftCheveron}
                              src={img_cheveronDoubleLeft} />

                        }
                        <img className='image' src={`${offer.images[imageDisplayed].images}`} />
                        {
                          imageDisplayed === offer.images.length - 1
                            ?
                            <></>
                            :
                            <img
                              className='cheveronButton'
                              onClick={handleRightCheveron}
                              src={img_cheveronDoubleRight} />
                        }
                      </div>
                  }
                  <div className='details'>
                  <div>
                    <h3>Description:</h3>
                    <div className='descriptionContainer' >{offer.description}</div>
                  </div>
                  <div>
                    <h3>Condition:</h3>
                    <ConditionTranslation obj={offer} />
                  </div>
                  <div>
                    <h3>Requested:</h3>
                    <div>{offer.wants_for_this_item}</div>
                  </div>
                  <div>
                    <h3>Location:</h3>
                    <div>{offer.author.location}</div>
                  </div>
                  <div>
                    <h3>Status:</h3>
                    <StatusTranslation obj={offer} />
                  </div>
                  </div>
                </div>
                {
                  deletePopUp === "notDisplayed"
                    ?
                    <div className='buttonSection'>
                      <TextButton
                      className='messageUpdateDeleteButton'
                      onClick={()=> navigate(-1)}
                      >Go back</TextButton>
                      {
                        offer.author.user.id === user.id
                          ?
                          <>
                            <TextButton
                              className='messageUpdateDeleteButton'
                              onClick={() => navigate(`/offers/update/${id}`)}
                            >Update</TextButton>
                            <TextButton
                              className='messageUpdateDeleteButton'
                              onClick={handleDeleteObject}
                            >Delete</TextButton>
                          </>
                          :
                          <TextButton className='messageUpdateDeleteButton' onClick={handleMessagedClicked}>Message</TextButton>

                      }

                    </div>
                    :
                    <PopUp>
                      <div>Are you sure that you'd like to delete this offer? Deletion can't be undone.</div>
                      <PopUpButtonYes
                        onClick={handleExitDelete}
                      >No</PopUpButtonYes>
                      <PopUpButtonNo
                        onClick={handleDeleteExecution}
                      >Yes</PopUpButtonNo>
                    </PopUp>
                }

              </>
      }      
    </ContainerOneOffer>
    <FooterElement></FooterElement>
    </>
  );
}

export default OfferDetails;
