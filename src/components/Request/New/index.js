import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, TextButton } from "../../../styles/MasterStyles";
import { ContainerNewRequest} from "./styles"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../baseurl";
import { useSettingTags } from "../../../hooks/tagsFetch";


function NewRequest() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const conditions = useSelector((state) => state.conditions)


    const userFirstName = useSelector(state => state.user.first_name)
    const maxImageFileSize = 3145728
    const maxNumberFiles = 5

    const maxLengthDescription = 500;
    const [currentLengthDescription, setCurrentLengthDescription] = useState(0);

    const maxLenghtTitle = 100;
    const [currentLengthTitle, setCurrentLengthTitle] = useState(0);

    const maxLengthOffered = 200;
    const [currentLengthOffered, setCurrentLengthOffered] = useState(0);

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
    const handleChangeOffered = (event) => {
        let inputValue = event.target.value.length
        setCurrentLengthOffered(inputValue)
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
        let fileSizeExceeded = "no"

        for (let i = 0; i < amountImages; i++) {
            if (Number(images[i].size) > maxImageFileSize) {

                fileSizeExceeded = "yes"

            }
        }



        if (amountImages === 0) {
            setMessage("noImageSelected")
        }
        if (amountImages > 5) {
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
        setMessage("no");
        console.log(imagesPath);
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const condition = document.getElementById("condition").value;
        const offered = document.getElementById("offer").value;
        const tag = document.getElementById("tags").value;
        //const images = imagesPath;
        const imagesNumber = imagesPath.length;

        if (title === "" || description === "" || condition === "" || offered === "" || tag === "") {
            
           
                setMessage("FieldsNotCompleted")
           
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
                formdata.append("has_for_this_item", `${offered}`);
                formdata.append("tags", `${tag}`);
                formdata.append("status", "1");
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                };

                fetch(`${baseUrl}/backend/api/wants/me/`, requestOptions)
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
                                                        {`No image has been added. A request doesn't require an image. 😉`}
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
        </ContainerNewRequest>
    );
}

export default NewRequest;