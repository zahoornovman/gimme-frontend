import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { Header2, PopUp, PopUpButtonNo, PopUpButtonYes, TextButton } from '../../../styles/MasterStyles';
import { ContainerOneRequest } from './styles';
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
import { loading, requestNotDisplayed } from '../../../elements/Statements/statements';

function RequestDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [request, setRequest] = useState("");
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
    setRequest("")

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/wants/${id}/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setRequest(result)
      })
      .catch(error => {
        console.log('error', error)
        setRequest("error")
      });
  }, [])

  const handleMessagedClicked = () => {
    dispatch(
      lastPath({
        type: 'want',
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

    fetch(`${baseUrl}/backend/api/wants/${id}/`, requestOptions)
      .then(
        (response) => {
          if (response.status < 300) {
            navigate("/requests/all")
          }
          else {
            setRequest("deletionFailed")
          }
        }
      )
      .catch(() => {
        setRequest("deletionFailed")
      });
  }

  return (
    <ContainerOneRequest>
      <Header></Header>
      {
        request === ""
          ?
          <div>{loading}</div>
          :
          request === "error"
            ?
            <div>{requestNotDisplayed}</div>
            :
            request === "deletionFailed"
              ?
              <>
                <div>{`Deletion has failed. Please contact our backoffice with referring to request ${request.id}.`}</div>
                <TextButton
                  onClick={() => navigate("/admin/contact")}
                >Contact details</TextButton>
              </>
              :
              <>
                <Header2>{request.title}</Header2>
                <div className='contentSection fontSize'>
                  {
                    request.images.length === 0
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
                        <img src={`${request.images[imageDisplayed].images}`} />
                        {
                          imageDisplayed === request.images.length - 1
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
                  <div>
                    <h3>Description:</h3>
                    <div>{request.description}</div>
                  </div>
                  <div>
                    <h3>Condition:</h3>
                    <ConditionTranslation obj={request} />
                  </div>
                  <div>
                    <h3>Offered:</h3>
                    <div>{request.has_for_this_item}</div>
                  </div>
                  <div>
                    <h3>Location:</h3>
                    <div>{request.author.location}</div>
                  </div>
                  <div>
                    <h3>Status:</h3>
                    <StatusTranslation obj={request} />
                  </div>
                </div>
                {
                  deletePopUp === "notDisplayed"
                    ?
                    <div className='buttonSection'>

                      {
                        request.author.user.id === user.id
                          ?
                          <>
                            <TextButton
                              onClick={() => navigate(`/requests/update/${id}`)}
                            >Update</TextButton>
                            <TextButton
                              className='deleteButton'
                              onClick={handleDeleteObject}
                            >Delete</TextButton>
                          </>
                          :
                          <TextButton onClick={handleMessagedClicked}>Message</TextButton>

                      }

                    </div>
                    :
                    <PopUp>
                      <div>Are you sure that you'd like to delete this request? Deletion can't be undone.</div>
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


      <FooterElement></FooterElement>
    </ContainerOneRequest>
  );
}

export default RequestDetails;
