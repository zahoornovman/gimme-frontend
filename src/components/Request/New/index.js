import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, TextButton } from "../../../styles/MasterStyles";
import { ContainerNewRequest } from "./styles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchingTags } from "../../../slices/tags/tagsSlice";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../baseurl";
import { useSettingTags } from "../../../hooks/tagsFetch";

function NewRequest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const tags = useSelector((state) => state.tags.tags)
  // const [tagsBackend, setTagsBackend] = useState([])
  const userFirstName = useSelector((state) => state.user.first_name);
  const maxImageFileSize = 3145728;
  const maxNumberFiles = 5;

  const maxLengthDescription = 500;
  const [currentLengthDescription, setCurrentLengthDescription] = useState(0);

  const maxLenghtTitle = 100;
  const [currentLengthTitle, setCurrentLengthTitle] = useState(0);

  const maxLengthOffered = 200;
  const [currentLengthOffered, setCurrentLengthOffered] = useState(0);

  const [message, setMessage] = useState("no");
  const [action, setAction] = useState("new");
  const [imagesPath, setImagesPath] = useState([]);

  const [tagsBackend, setTagsBackground] = useState([]);
  const tags = useSelector((state) => state.tags.tags);

  useSettingTags();
  useEffect(() => {
    setTagsBackground(tags);
  }, [tags]);

  // useEffect(
  //     () => {

  //         //fetching only, if user has access page without being on the welcome page before
  //         if (tags === "notFetched") {
  //             var myHeaders = new Headers();
  //             myHeaders.append("Content-Type", "application/json");

  //             var raw = "\n";

  //             var requestOptions = {
  //                 method: 'GET',
  //                 headers: myHeaders,
  //                 //body: raw,
  //                 redirect: 'follow'
  //             };

  //             fetch(`${baseUrl}/backend/api/tags/`, requestOptions)
  //                 .then(response => response.json())
  //                 .then(result => {
  //                     dispatch(fetchingTags({
  //                         tags: result
  //                     }))
  //                     setTagsBackend(result)

  //                 }
  //                 )
  //                 .catch(error => console.log('error', error));

  //         }
  //     }, []
  // )

  const handleChangeTitle = (event) => {
    let inputValue = event.target.value.length;
    setCurrentLengthTitle(inputValue);
  };
  const handleChangeDescription = (event) => {
    let inputValue = event.target.value.length;
    setCurrentLengthDescription(inputValue);
  };
  const handleChangeOffered = (event) => {
    let inputValue = event.target.value.length;
    setCurrentLengthOffered(inputValue);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    setMessage("no");
    const images = event.target.files;
    const numberImages = Object.keys(images).length;
    console.log(images);
    console.log(`number images: ${numberImages}`);
    console.log(message);
    if (numberImages === 0) {
      setMessage("noImageSelected");
    } else {
      if (numberImages > 5) {
        setMessage("fileQuantityError");
      } else {
        for (let i = 0; i < numberImages; i++) {
          console.log(images[`${i}`].size);
          if (images[`${i}`].size > maxImageFileSize) {
            setMessage("fileSizeExceededLimit");
            break;
          }
        }
        if (message === "no") {
          const imagesUrl = [];
          for (let j = 0; j < numberImages; j++) {
            let imageUrl = URL.createObjectURL(event.target.files[`${j}`]);
            imagesUrl.push(imageUrl);
          }

          setImagesPath(imagesUrl);
          console.log(imagesPath);
        }
      }
    }
  };
  const handleSave = () => {
    setMessage("no");
    console.log(imagesPath);
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const condition = document.getElementById("condition").value;
    const offered = document.getElementById("offer").value;
    const tag = document.getElementById("tags").value;
    const images = imagesPath;
    const imagesNumber = imagesPath.length;

    console.log(`title: ${title}`);
    console.log(`description: ${description}`);
    console.log(`condition: ${condition}`);
    console.log(`offered: ${offered}`);
    console.log(`tag: ${tag}`);
    console.log(`images: ${images}`);
    console.log(`images number: ${imagesNumber}`);
    //console.log(`url create object:${URL.createObjectURL(document.getElementById("images").files[0])}`)

    if (
      title === "" ||
      description === "" ||
      condition === "" ||
      offered === "" ||
      tag === ""
    ) {
      setMessage("FieldsNotCompleted");
    } else {
      console.log("everything is okay");
      var myHeaders = new Headers();
      //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjI2NjYyLCJpYXQiOjE2NzU3OTQ2NjIsImp0aSI6IjBiZDUwNTlmM2QxNDRlNzY4ZjRiOTM5ZWNjNjk0M2JhIiwidXNlcl9pZCI6Mn0.r6TsaD9OlR9c-1w6yPA5AAOshfHceTY6ai0TdxL_A-s");
      myHeaders.append("Authorization", `Bearer ${user.acces}`);
        console.log(`title: ${title}`)
        console.log(`description: ${description}`)
        console.log(`condition: ${condition}`)
        console.log(`offered: ${offered}`)
        console.log(`tag: ${tag}`)
        console.log(`images: ${images}`)
        console.log(`images number: ${imagesNumber}`)
        //console.log(`url create object:${URL.createObjectURL(document.getElementById("images").files[0])}`)


        if (title === "" || description === "" || condition === "" || offered === "" || tag === "") {

            setMessage("FieldsNotCompleted")

        }

        else {
            console.log("everything is okay")
            var myHeaders = new Headers();
            //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjI2NjYyLCJpYXQiOjE2NzU3OTQ2NjIsImp0aSI6IjBiZDUwNTlmM2QxNDRlNzY4ZjRiOTM5ZWNjNjk0M2JhIiwidXNlcl9pZCI6Mn0.r6TsaD9OlR9c-1w6yPA5AAOshfHceTY6ai0TdxL_A-s");
            myHeaders.append("Authorization", `Bearer ${user.acces}`);

      var formdata = new FormData();
      formdata.append("title", `${title}`);
      formdata.append("description", `${description}`);
      formdata.append("condition", `${condition}`);
      formdata.append("has_for_this_item", `${offered}`);
      formdata.append("tags", `${tag}`);
      // for (let k = 0; k < imagesNumber; k++){
      //     console.log(`${k} path: ${imagesPath[k]}`)
      //     formdata.append("images", imagesPath[k], `${title}-${k}`)
      // }
      //formdata.append("images", URL.createObjectURL(document.getElementById("images").files[0]), "/C:/Users/Christian/OneDrive/Bilder/Diashow/ISchgl, Schwarzwasser See.jpg");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

            fetch(`${baseUrl}/backend/api/wants/me/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setAction("created")

                })
                .catch(error => {
                    console.log('error', error)
                    setAction("error")
                });
        }

    }
    return (
        <ContainerNewRequest>
            <Header></Header>
            {
                userFirstName === "NoNa"
                    ?
                    <div className="fontSize accessDenied">
                        Please sign in to place a new request. 😋
                    </div>
                    :
                    tags === "notFetched"
                        ?
                        <div className="loading">
                            Loading. Please be patient. 😊
                        </div>
                        :
                        action === "created"
                            ?
                            <div className="created fontSize">
                                <div>Your request has been successfully created. 😃</div>
                                <div className="createdButtons">
                                    <TextButton
                                        className="fontSize"
                                        onClick={() => {
                                            setAction("new")
                                            setCurrentLengthDescription(0)
                                            setCurrentLengthOffered(0)
                                            setCurrentLengthTitle(0)
                                        }}
                                    >New request
                                    </TextButton>
                                    <TextButton
                                        className="fontSize"
                                        onClick={() => navigate("/")}
                                    >Home</TextButton>
                                </div>
                            </div>
                            :
                            action === "error"
                                ?
                                <div className="error fontSize">
                                    <div>Unfortunately, an error has occured. Please contact our backoffice.</div>
                                    <TextButton
                                        className="fontSize"
                                        onClick={() => navigate("/admin/contact")}
                                    >Contact details</TextButton>
                                </div>
                                :
                                <div
                                    className="requestContentSection">
                                    <Header2
                                        className="fontSize">What do you like to receive?</Header2>
                                    {
                                        message === "fileQuantityError"
                                            ?
                                            <div className="fontSize">
                                                {`Only ${maxNumberFiles} images are allowed. Please reduce the number of images to ${maxNumberFiles}. 😁`}
                                            </div>
                                            :
                                            message === "fileSizeExceededLimit"
                                                ?
                                                <div className="fontSize">
                                                    {`File size can't exceed ${maxImageFileSize / 1024 / 1024} MB. Please remove all files exceeding ${maxImageFileSize / 1024 / 1024} MB. 😉`}
                                                </div>
                                                :
                                                message === "noImageSelected" || message === "noImageChoosen"
                                                    ?
                                                    <div className="fontSize">
                                                        {`Offers require an image. 😉`}
                                                    </div>
                                                    :
                                                    message === "imageAndFieldsNotCompleted"
                                                        ?
                                                        <div className="fontSize">
                                                            Please upload at least 1 image and fill in all fields. 😉
                                                        </div>
                                                        :
                                                        message === "FieldsNotCompleted"
                                                            ?
                                                            <div className="fontSize">
                                                                Please fill in all fields. 😉
                                                            </div>
                                                            :
                                                            <></>
                                    }
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
                                                New
                                            </option>
                                            <option
                                                value="2"
                                                className="fontSize">
                                                Used like new
                                            </option>
                                            <option
                                                value="3"
                                                className="fontSize">
                                                Used good
                                            </option>
                                            <option
                                                value="4"
                                                className="fontSize">
                                                Used fair
                                            </option>
                                        </select>
                                    </div>
                                    <div className="inputField">
                                        <label
                                            className="fontSize"
                                            htmlFor="offer"
                                        >
                                            Offered:
                                        </label>
                                        <input
                                            className="fontSize"
                                            onChange={handleChangeOffered}
                                            maxLength={maxLengthOffered}
                                            id="offer"></input>
                                        <div className="fontSize">{`(${currentLengthOffered}/${maxLengthOffered})`}</div>
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
                                            Images(s):
                                        </label>
                                        <input
                                            className="fontSize"
                                            id="images"
                                            type="file"
                                            accept=".jpeg, .jpg, .png, .gif"
                                            onChange={handleFileUpload}
                                            multiple></input>
                                        <div className="fontSize">
                                            <p>only .jpeg, .jpg, .png, .gif</p>
                                            <p>{`max. ${maxNumberFiles} images`}</p>
                                            <p>{`max. ${maxImageFileSize / 1024 / 1024} MB / image`}</p>
                                        </div>
                                    </div>
                                    <TextButton
                                        className="fontSize"
                                        onClick={handleSave}
                                    >Save</TextButton>
                                </div>
            }

      <FooterElement></FooterElement>
    </ContainerNewRequest>
  );
}}

export default NewRequest;
