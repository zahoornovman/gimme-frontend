import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { Header2, TextButton } from '../../../styles/MasterStyles';
import { ContainerUpdateOffer } from './styles';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSettingTags } from '../../../hooks/tagsFetch';
import { baseUrl } from '../../../baseurl';
import img_cheveronDoubleLeft from "../../../images/chevronDoubleLeft.svg"
import img_cheveronDoubleRight from "../../../images/chevronDoubleRight.svg"
import img_trash from "../../../images/trash.svg"
import { deletedImageNotSuccessful, deletedImageSuccessful, fields, loading, offerImage, offerImageFields, offerNotDisplayed, updateObjectFailed } from '../../../elements/Statements/statements';

function UpdateOffer() {
  const navigate = useNavigate();
  const [offer, setOffer] = useState("");
  const { id } = useParams();
  const [imageDisplayed, setImageDisplayed] = useState(0)
  const [imageAvailable, setImageAvailable] = useState([])
  const [actionResponse, setActionResponse] = useState("")

  const conditions = useSelector((state) => state.conditions)
  const status = useSelector((state) => state.status)

  const maxImageFileSize = 3145728
  const [maxNumberFiles, setMaxNumberFiles] = useState(5)
  const maxAllowedFiles = 5;

  const maxLengthDescription = 1000;
  const [currentLengthDescription, setCurrentLengthDescription] = useState(0)

  const maxLenghtTitle = 100;
  const [currentLengthTitle, setCurrentLengthTitle] = useState(0)

  const maxLengthRequested = 200;
  const [currentLengthRequested, setCurrentLengthRequested] = useState(0)

  const [message, setMessage] = useState("no")
  const [imagesPath, setImagesPath] = useState([])

  const [tagsBackend, setTagsBackground] = useState([]);
  const tags = useSelector((state) => state.tags.tags);

  const user = useSelector((state) => state.user)

  const handleChangeTitle = (event) => {
    setActionResponse("")
    setMessage("no")
    let inputValue = event.target.value.length
    setCurrentLengthTitle(inputValue)
  }
  const handleChangeDescription = (event) => {
    setActionResponse("")
    setMessage("no")
    let inputValue = event.target.value.length
    setCurrentLengthDescription(inputValue)
  }
  const handleChangeRequested = (event) => {
    setActionResponse("")
    setMessage("no")
    let inputValue = event.target.value.length
    setCurrentLengthRequested(inputValue)
  }

  const handleRightCheveron = () => {
    setActionResponse("")
    setMessage("no")
    setImageDisplayed(imageDisplayed + 1)
  }
  const handleLeftCheveron = () => {
    setActionResponse("")
    setMessage("no")
    setImageDisplayed(imageDisplayed - 1)
  }

  const getRequestObject = () => {
    setActionResponse("")
    setMessage("no")
    setOffer("")


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/haves/${id}/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setCurrentLengthDescription(result.description.length)
        setCurrentLengthTitle(result.title.length)
        setCurrentLengthRequested(result.wants_for_this_item.length)
        setMaxNumberFiles(maxAllowedFiles - result.images.length)
        setImageAvailable(result.images)
        setOffer(result)
      })
      .catch(() => {
        setOffer("error")
      });
  }

  const handleDeleteImage = () => {
    setActionResponse("")
    setMessage("no")
    let imageId = offer.images[imageDisplayed].id



    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.acces}`);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${baseUrl}/backend/api/have_image/${imageId}/`, requestOptions)
      .then(response => {
        if (response.status < 300) {
          setActionResponse("imageSuccessfullyDeleted")
          setMaxNumberFiles(maxNumberFiles + 1)
          let availableImages = imageAvailable
          availableImages.splice(imageDisplayed, 1)
          setImageAvailable(availableImages)
          setImageDisplayed(0)
        }
        else {
          setActionResponse("imageDeletionFailed")
        }
      })
      .catch(() => {
        setActionResponse("imageDeletionFailed");
      });
  }

  const handleFileUpload = (event) => {

    event.preventDefault()
    setActionResponse("")
    setMessage("no")
    const images = Array.prototype.slice.call(event.target.files)
    const amountImages = images.length
    let fileSizeExceeded = "no"

    for (let i = 0; i < amountImages; i++) {
      if (Number(images[i].size) > maxImageFileSize) {

        fileSizeExceeded = "yes"

      }
    }



    if (amountImages === 0 && maxNumberFiles === 5) {
      setMessage("noImageSelected")
    }
    else if (amountImages === 0) {

    }
    else if (amountImages > maxNumberFiles) {
      setMessage("fileQuantityError")
    }
    else if (fileSizeExceeded === "yes") {
      setMessage("fileSizeExceededLimit")
    }
    else {
      const uploadedImages = []
      for (let j = 0; j < amountImages; j++) {
        uploadedImages.push(images[j])
      }
      setImagesPath(uploadedImages)
    }

  }

  const handleSave = () => {
    setActionResponse("")
    setMessage("no")

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const condition = document.getElementById('condition').value
    const requested = document.getElementById('request').value
    const tag = document.getElementById('tagsSelection').value
    const status = document.getElementById('status').value
    const imagesNumber = imagesPath.length


    if (title === "" || description === "" || condition === "" || requested === "" || tag === "" || status === "") {
      if (imagesNumber === 0 && maxNumberFiles === 5) {
        setMessage("imageAndFieldsNotCompleted")
      }
      else {
        setMessage("FieldsNotCompleted")
      }
    }
    else if (imagesNumber === 0 && maxNumberFiles === 5) {
      setMessage("noImageChoosen")
    }
    else {
      if (message === "no") {


        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.acces}`);



        const formdata = new FormData();
        for (let k = 0; k < imagesNumber; k++) {
          formdata.append('images', imagesPath[k], imagesPath.name);
        }

        formdata.append("title", `${title}`);
        formdata.append("description", `${description}`);
        formdata.append("condition", `${condition}`);
        formdata.append("wants_for_this_item", `${requested}`);
        formdata.append("tags", `${tag}`);
        formdata.append("status", `${status}`);
        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch(`${baseUrl}/backend/api/haves/${id}/`, requestOptions)
          .then(response => response.json())
          .then(() => {
            navigate(`/offers/${id}`)
            setImagesPath([])

          })
          .catch(() => {
            setActionResponse("updateFailed")
            setImagesPath([])
          });
      }

    }
  }

  useSettingTags();
  useEffect(() => {
    setTagsBackground(tags);
  }, [tags]);

  useEffect(() => {
    getRequestObject()
  }, [])

  return (
    <><Header></Header>
      <ContainerUpdateOffer>
        {
          user.first_name === "NoNa"
            ?
            <div>Please sign in to update an offer.</div>
            :
            <>
              {
                offer === ""
                  ?
                  <div>{loading}</div>
                  :
                  offer === "error"
                    ?
                    <div>{offerNotDisplayed}</div>
                    :
                    <>
                      <Header2>Please modify your offer!</Header2>
                      <div className='contentSection'>

                        {
                          imageAvailable.length === 0
                            ?
                            <></>
                            :
                            <>
                              <div className='imageGallery'>
                                <div className='containerTrash'></div>
                                <div className='containerImage'>
                                  {
                                    imageDisplayed === 0
                                      ?
                                      <div className='noCheveronButton'></div>
                                      :
                                      <img
                                        className='cheveronButton'
                                        onClick={handleLeftCheveron}
                                        src={img_cheveronDoubleLeft} />

                                  }
                                  <img className='image' src={`${imageAvailable[imageDisplayed].images}`} />
                                  {
                                    imageDisplayed === offer.images.length - 1
                                      ?
                                      <div className='noCheveronButton'></div>
                                      :
                                      <img
                                        className='cheveronButton'
                                        onClick={handleRightCheveron}
                                        src={img_cheveronDoubleRight} />
                                  }
                                </div>
                                {
                                  imageAvailable.length === 1
                                    ?
                                    <div className='errorMessage'>Another image has to be added, before this image can be deleted.</div>
                                    :
                                    <div className='containerTrash'>
                                      <img
                                        src={img_trash}
                                        onClick={handleDeleteImage}
                                        className="imageTrash" />
                                    </div>
                                }

                              </div>
                              {
                                actionResponse === "imageSuccessfullyDeleted"
                                  ?
                                  <div className='deletedImage'>{deletedImageSuccessful}</div>
                                  :
                                  actionResponse === "imageDeletionFailed"
                                    ?
                                    <>
                                      <div>{deletedImageNotSuccessful}</div>
                                      <TextButton
                                        className='contactButton'
                                        onClick={() => navigate("/admin/contact")}
                                      >Contact details</TextButton>
                                    </>
                                    :
                                    <></>
                              }

                            </>
                        }
                        <div className='details'>
                          <div className="inputField">
                            <label
                              className="fontSize"
                              htmlFor="title"
                            >
                              Title:
                            </label>
                            <input
                              className="fontSize"
                              onChange={handleChangeTitle}
                              maxLength={maxLenghtTitle}
                              defaultValue={offer.title}
                              id="title"></input>
                            <div className="fontSize">{`(${currentLengthTitle}/${maxLenghtTitle})`}</div>
                          </div>
                          <div className="inputField">
                            <label
                              className="fontSize"
                              htmlFor="description"
                            >
                              Description:
                            </label>
                            <textarea
                              className="fontSize"
                              onChange={handleChangeDescription}
                              maxLength={maxLengthDescription}
                              defaultValue={offer.description}
                              id="description"></textarea>
                            <div className="fontSize">{`(${currentLengthDescription}/${maxLengthDescription})`}</div>
                          </div>

                          <div className="inputField">
                            <label
                              className="fontSize"
                              htmlFor="request"
                            >
                              Requested:
                            </label>
                            <textarea
                              className="fontSize"
                              onChange={handleChangeRequested}
                              maxLength={maxLengthRequested}
                              defaultValue={offer.wants_for_this_item}
                              id="request"></textarea>
                            <div className="fontSize">{`(${currentLengthRequested}/${maxLengthRequested})`}</div>
                          </div>
                          <div className="inputField">
                            <label
                              className="fontSize"
                              htmlFor="condition"
                            >Condition:</label>

                            <select
                              id="condition"
                              defaultValue={offer.condition}
                            >
                              <option
                                value="1"
                                className="fontSize">
                                {conditions.c1}
                              </option>
                              <option
                                value="2"
                                className="fontSize">
                                {conditions.c2}
                              </option>
                              <option
                                value="3"
                                className="fontSize">
                                {conditions.c3}
                              </option>
                              <option
                                value="4"
                                className="fontSize">
                                {conditions.c4}
                              </option>
                            </select>
                          </div>
                          <div className="inputField">
                            <label
                              className="fontSize"
                              htmlFor="tagsSelection"
                            >Tag:</label>

                            <select
                              defaultValue={offer.tags[0]}
                              id="tagsSelection">
                              {
                                tags === "notFetched"
                                  ?
                                  tagsBackend.map((tag, index) =>
                                    <option
                                      key={index}
                                      className="fontSize"
                                      value={`${tag.id}`}
                                    >
                                      {
                                        `${tag.title}`
                                      }
                                    </option>
                                  )
                                  :
                                  tags.map((tag, index) =>
                                    <option
                                      key={index}
                                      className="fontSize"
                                      value={`${tag.id}`}
                                    >
                                      {
                                        `${tag.title}`
                                      }
                                    </option>
                                  )
                              }
                            </select>
                          </div>
                          <div className="inputField">
                            <label
                              className="fontSize"
                              htmlFor="status"
                            >Status:</label>

                            <select
                              id="status"
                              defaultValue={offer.status}
                            >
                              <option
                                value="1"
                                className="fontSize">
                                {status.s1}
                              </option>
                              <option
                                value="2"
                                className="fontSize">
                                {status.s2}
                              </option>
                              <option
                                value="3"
                                className="fontSize">
                                {status.s3}
                              </option>
                              <option
                                value="4"
                                className="fontSize">
                                {status.s4}
                              </option>
                            </select>
                          </div>
                          <div className="inputField addImage">
                            <label
                              className="fontSize"
                              htmlFor="images"
                            >
                              <a className="fontSize buttonStyle">Add images</a>
                            </label>
                            <input
                              className="fontSize"
                              id="images"
                              type="file"
                              accept=".jpeg, .jpg, .png, .gif"
                              onChange={handleFileUpload}
                              style={{ display: "none" }}
                              multiple></input>

                            <div className="fontSize">
                              <p>only .jpeg, .jpg, .png, .gif</p>
                              <p>{`max. ${maxNumberFiles} images`}</p>
                              <p>{`max. ${maxImageFileSize / 1024 / 1024} MB / image`}</p>
                            </div>
                            {
                              message === "fileQuantityError"
                                ?
                                <div className='errorMessage'>{`Only ${maxNumberFiles} images are allowed. Please reduce the number of images to ${maxNumberFiles}. 😁`}</div>
                                :
                                message === "fileSizeExceededLimit"
                                  ?
                                  <div className='errorMessage'>{`File size can't exceed ${maxImageFileSize / 1024 / 1024} MB. Please remove all files exceeding ${maxImageFileSize / 1024 / 1024} MB. 😉`}</div>
                                  :
                                  <></>
                            }
                            <div>

                              {
                                imagesPath.length === 0
                                  ?
                                  <></>
                                  :
                                  <>
                                    <h3 className="fontSize">files selected:</h3>
                                    {
                                      imagesPath.map((image, index) =>
                                        <div
                                          className="fontSize"
                                          key={index}
                                        >{`${image.name} (size: ${Math.round(image.size / 1024 / 1024 * 100) / 100} MB)`}</div>)
                                    }
                                  </>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      {
                        message === "noImageSelected" || message === "noImageChoosen"
                          ?
                          <div className='errorMessage'>{offerImage}</div>
                          :
                          message === "imageAndFieldsNotCompleted"
                            ?
                            <div className='errorMessage'>{offerImageFields}</div>
                            :
                            message === "FieldsNotCompleted"
                              ?
                              <div className='errorMessage'>{fields}</div>
                              :
                              actionResponse === "updateFailed"
                                ?
                                <>
                                  <div>{updateObjectFailed}</div>
                                  <TextButton
                                    className='contactButton'
                                    onClick={() => navigate("/admin/contact")}
                                  >Contact details</TextButton>
                                </>
                                :
                                <></>
                      }
                      <div className='buttonSection'>
                        <TextButton
                          className='saveGoBackButton'
                          onClick={handleSave}
                        >Save changes</TextButton>
                        <TextButton
                          className='saveGoBackButton'
                          onClick={() => navigate(`/offers/${id}`)}
                        >Go back</TextButton>
                      </div>

                    </>
              }
            </>
        }


      </ContainerUpdateOffer>
      <FooterElement></FooterElement>
    </>
  );
}

export default UpdateOffer;
