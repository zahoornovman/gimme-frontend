import FooterElement from '../../../elements/Footer';
import Header from '../../../elements/Header';
import { Header2 } from '../../../styles/MasterStyles';
import { ContainerUpdateOffer } from './styles';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSettingTags } from '../../../hooks/tagsFetch';
import { baseUrl } from '../../../baseurl';
import { lastPath } from '../../../slices/messages/messageSlice';

function UpdateOffer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [offer, setOffer] = useState("");
  const { id } = useParams();
  const [imageDisplayed, setImageDisplayed] = useState(0)

  const conditions = useSelector((state) => state.conditions)
  const status = useSelector((state) => state.status)




  const userFirstName = useSelector(state => state.user.first_name)
  const maxImageFileSize = 3145728
  const maxNumberFiles = 5

  const maxLengthDescription = 500;
  const [currentLengthDescription, setCurrentLengthDescription] = useState(0)

  const maxLenghtTitle = 100;
  const [currentLengthTitle, setCurrentLengthTitle] = useState(0)

  const maxLengthRequested = 200;
  const [currentLengthRequested, setCurrentLengthRequested] = useState(0)

  const [message, setMessage] = useState("no")
  const [action, setAction] = useState("new")
  const [imagesPath, setImagesPath] = useState([])

  const [tagsBackend, setTagsBackground] = useState([]);
  const tags = useSelector((state) => state.tags.tags);

  const user = useSelector((state) => state.user)

  const handleChangeTitle = (event) => {
    let inputValue = event.target.value.length
    setCurrentLengthTitle(inputValue)
  }
  const handleChangeDescription = (event) => {
    let inputValue = event.target.value.length
    setCurrentLengthDescription(inputValue)
  }
  const handleChangeRequested = (event) => {
    let inputValue = event.target.value.length
    setCurrentLengthRequested(inputValue)
  }

  const handleFileUpload = (event) => {

    //source: https://www.youtube.com/watch?v=XeiOnkEI7XI
    //source: https://levelup.gitconnected.com/how-to-implement-multiple-file-uploads-in-react-4cdcaadd0f6e

    //code for 1 image
    //setImagesPath(event.target.files[0])
    event.preventDefault()
    setMessage("no")
    const images = Array.prototype.slice.call(event.target.files)
    const amountImages = images.length
    console.log(images)
    console.log(`amount: ${amountImages}`)
    let fileSizeExceeded = "no"

    for (let i = 0; i < amountImages; i++) {
      if (Number(images[i].size) > maxImageFileSize) {

        fileSizeExceeded = "yes"

      }
    }



    if (amountImages === 0) {
      setMessage("noImageSelected")
    }
    else if (amountImages > 5) {
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
    setMessage("no")
    console.log(imagesPath)

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const condition = document.getElementById('condition').value
    const requested = document.getElementById('request').value
    const tag = document.getElementById('tags').value
    //const images = imagesPath
    const imagesNumber = imagesPath.length

    if (title === "" || description === "" || condition === "" || requested === "" || tag === "") {
      if (imagesNumber === 0) {
        setMessage("imageAndFieldsNotCompleted")
      }
      else {
        setMessage("FieldsNotCompleted")
      }
    }
    else if (imagesNumber === 0) {
      setMessage("noImageChoosen")
    }
    else {
      console.log("everything is okay")
      if (message === "no") {
        //trial 3
        //source: https://www.youtube.com/watch?v=XeiOnkEI7XI

        var myHeaders = new Headers();
        //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjI2NjYyLCJpYXQiOjE2NzU3OTQ2NjIsImp0aSI6IjBiZDUwNTlmM2QxNDRlNzY4ZjRiOTM5ZWNjNjk0M2JhIiwidXNlcl9pZCI6Mn0.r6TsaD9OlR9c-1w6yPA5AAOshfHceTY6ai0TdxL_A-s");
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
        formdata.append("status", "1");
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch(`${baseUrl}/backend/api/haves/me/`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setAction("created")
            setImagesPath([])

          })
          .catch(error => {
            console.log('error', error)
            setAction("error")
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

  return (
    <ContainerUpdateOffer>
      <Header></Header>
      {
        offer === ""
          ?
          <div>Loading. Please be patient. 😉</div>
          :
          offer === "error"
            ?
            <div>The desired offer can't be displayed at the moment. We apologise fot the inconvenience. 😕</div>
            :
            <>
              <Header2>Please modify your offer!</Header2>
              <div>
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
                  <input
                    className="fontSize"
                    onChange={handleChangeDescription}
                    maxLength={maxLengthDescription}
                    id="description"></input>
                  <div className="fontSize">{`(${currentLengthDescription}/${maxLengthDescription})`}</div>
                </div>
                <div className="inputField">
                  <label
                    className="fontSize"
                    htmlFor="condition"
                  >Condition:</label>

                  <select
                    id="condition"
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
                    htmlFor="request"
                  >
                    Requested:
                  </label>
                  <input
                    className="fontSize"
                    onChange={handleChangeRequested}
                    maxLength={maxLengthRequested}
                    id="request"></input>
                  <div className="fontSize">{`(${currentLengthRequested}/${maxLengthRequested})`}</div>
                </div>
                <div className="inputField">
                  <label
                    className="fontSize"
                    htmlFor="tags"
                  >Tag:</label>

                  <select
                    id="tags">
                    {
                      tags === "notFetched"
                        ?
                        tagsBackend.map((tag, index) =>
                          <option
                            key={index}
                            id={index}
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
                            id={index}
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
                    htmlFor="images"
                  >
                    <a className="fontSize buttonStyle">Upload images</a>
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
                <div className="inputField">
                  <label
                    className="fontSize"
                    htmlFor="status"
                  >Status:</label>

                  <select
                    id="status"
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
              </div>

            </>
      }

      <FooterElement></FooterElement>
    </ContainerUpdateOffer>
  );
}

export default UpdateOffer;
