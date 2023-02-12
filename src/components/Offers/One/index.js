import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { Header2, PopUp, PopUpButtonNo, PopUpButtonYes, TextButton } from '../../../styles/MasterStyles';
import { ContainerOneOffer } from './styles';
import { useNavigate, Link, useParams } from 'react-router-dom';
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
    //var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      //body: formdata,
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
    //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NTQ0MzY0LCJpYXQiOjE2NzYxMTIzNjQsImp0aSI6IjA4ZDgzZDZiYzJmMTQyNzQ5YjZiOTA1MWJkZjgyYWNhIiwidXNlcl9pZCI6Mn0.0WNLR973Gggaiwl4h0KAgmEuq0RRLUHHI9YwlCHvCsk");
    myHeaders.append("Authorization", `Bearer ${user.acces}`);

    //var formdata = new FormData();

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      //body: formdata,
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/haves/${id}/`, requestOptions)
      .then(
        () => navigate("/offers/all")
      )
      //.then(result => console.log(result))
      .catch(error => {
        console.log('error', error)
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
          <div>Loading. Please be patient. 😉</div>
          :
          offer === "error"
            ?
            <div>The desired offer can't be displayed at the moment. We apologise fot the inconvenience. 😕</div>
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
                    offer.images.length === 1
                      ? 
                      <div className='imageBox'>
                        <img src={offer.images[0].images} />
                      </div>
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
                        <img src={`offer.images[${imageDisplayed}]`} />
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
                    <div>{offer.description}</div>
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
