import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, TextButton } from "../../../styles/MasterStyles";
import { ContainernewOffer } from "./styles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchingTags } from "../../../slices/tags/tagsSlice";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../baseurl";
import { useSettingTags } from "../../../hooks/tagsFetch";
import axios from "axios";
import { useRef } from "react";
import { errorNew, fields, loading, offerImage, offerImageFields } from "../../../elements/Statements/statements";

function NewOffer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const conditions = useSelector((state) => state.conditions)


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

    useSettingTags();
    useEffect(() => {
        setTagsBackground(tags);
    }, [tags]);


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



        //original code
        // event.preventDefault()
        // setMessage("no")
        // const images = event.target.files
        // const numberImages = Object.keys(images).length
        // console.log(images)
        // console.log(`number images: ${numberImages}`)
        // console.log(message)
        // if (numberImages === 0) {
        //     setMessage("noImageSelected")
        // }
        // else {
        //     if (numberImages > 5) {
        //         setMessage("fileQuantityError")
        //     }
        //     else {
        //         for (let i = 0; i < numberImages; i++) {
        //             console.log(images[`${i}`].size)
        //             if (images[`${i}`].size > maxImageFileSize) {
        //                 setMessage("fileSizeExceededLimit");
        //                 break;
        //             }

        //         }
        //         if (message === "no") {
        //             const imagesUrl = []
        //             for (let j = 0; j < numberImages; j++) {
        //                 let imageUrl = URL.createObjectURL(event.target.files[`${j}`])
        //                 imagesUrl.push(imageUrl)
        //             }

        //             setImagesPath(imagesUrl)
        //             console.log(imagesPath)
        //         }
        //     }
        // }

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



        //original code
        // setMessage("no")
        // console.log(imagesPath)
        // const title = document.getElementById('title').value
        // const description = document.getElementById('description').value
        // const condition = document.getElementById('condition').value
        // const requested = document.getElementById('request').value
        // const tag = document.getElementById('tags').value
        // const images = imagesPath
        // const imagesNumber = imagesPath.length

        // console.log(`title: ${title}`)
        // console.log(`description: ${description}`)
        // console.log(`condition: ${condition}`)
        // console.log(`requested: ${requested}`)
        // console.log(`tag: ${tag}`)
        // console.log(`images: ${images}`)
        // console.log(`images number: ${imagesNumber}`)
        // //console.log(`url create object:${URL.createObjectURL(document.getElementById("images").files[0])}`)


        // if (title === "" || description === "" || condition === "" || requested === "" || tag === "") {
        //     if (imagesNumber === 0) {
        //         setMessage("imageAndFieldsNotCompleted")
        //     }
        //     else {
        //         setMessage("FieldsNotCompleted")
        //     }
        // }
        // else if (imagesNumber === 0) {
        //     setMessage("noImageChoosen")
        // }
        // else {
        //     console.log("everything is okay")
        //     var myHeaders = new Headers();
        //     //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjI2NjYyLCJpYXQiOjE2NzU3OTQ2NjIsImp0aSI6IjBiZDUwNTlmM2QxNDRlNzY4ZjRiOTM5ZWNjNjk0M2JhIiwidXNlcl9pZCI6Mn0.r6TsaD9OlR9c-1w6yPA5AAOshfHceTY6ai0TdxL_A-s");
        //     myHeaders.append("Authorization", `Bearer ${user.acces}`);

        //     var formdata = new FormData();
        //     formdata.append("title", `${title}`);
        //     formdata.append("description", `${description}`);
        //     formdata.append("condition", `${condition}`);
        //     formdata.append("wants_for_this_item", `${requested}`);
        //     formdata.append("tags", `${tag}`);
        //     formdata.append("status", "1");
        //     //formdata.append("images", imagesPath[0], "boney")
        //     // for (let k = 0; k < imagesNumber; k++){
        //     //       console.log(`${k} path: ${imagesPath[k]}`)
        //     //       formdata.append("images", imagesPath[k], `${title}-${k}`)
        //     // }
        //     //formdata.append("images", URL.createObjectURL(document.getElementById("images").files[0]), "/C:/Users/Christian/OneDrive/Bilder/Diashow/ISchgl, Schwarzwasser See.jpg");

        //     var requestOptions = {
        //         method: 'POST',
        //         headers: myHeaders,
        //         body: formdata,
        //         redirect: 'follow'
        //     };

        //     fetch(`${baseUrl}/backend/api/haves/me/`, requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             setAction("created")

        //         })
        //         .catch(error => {
        //             console.log('error', error)
        //             setAction("error")
        //         });
        // }

    }
    return (
        <ContainernewOffer>
            <Header></Header>
            {
                userFirstName === "NoNa"
                    ?
                    <div className="fontSize accessDenied">
                        Please sign in to place a new offer. 😋
                    </div>
                    :
                    tags === "notFetched"
                        ?
                        <div className="loading">
                            {loading}
                        </div>
                        :
                        action === "created"
                            ?
                            <div className="created fontSize">
                                <div>Your offer has been successfully created. 😃</div>
                                <div className="createdButtons">
                                    <TextButton
                                        className="fontSize"
                                        onClick={() => {
                                            setAction("new")
                                            setCurrentLengthDescription(0)
                                            setCurrentLengthRequested(0)
                                            setCurrentLengthTitle(0)
                                        }}
                                    >New offer
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
                                    <div>{errorNew}</div>
                                    <TextButton
                                        className="fontSize"
                                        onClick={() => navigate("/admin/contact")}
                                    >Contact details</TextButton>
                                </div>
                                :
                                <div
                                    className="offerContentSection">
                                    <Header2
                                        className="fontSize">What do you like to give away?</Header2>
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
                                                        {offerImage}
                                                    </div>
                                                    :
                                                    message === "imageAndFieldsNotCompleted"
                                                        ?
                                                        <div className="fontSize">
                                                            {offerImageFields}
                                                        </div>
                                                        :
                                                        message === "FieldsNotCompleted"
                                                            ?
                                                            <div className="fontSize">
                                                                {fields}
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
                                    <TextButton
                                        className="fontSize"
                                        onClick={handleSave}
                                    >Save</TextButton>
                                </div>
            }

            <FooterElement></FooterElement>
        </ContainernewOffer>
    );
}

export default NewOffer;