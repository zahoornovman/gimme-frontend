import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, TextButton } from "../../../styles/MasterStyles";
import { ContainernewOffer } from "./styles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchingTags } from "../../../features/tags/tagsSlice";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../baseurl";

function NewOffer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tags = useSelector((state) => state.tags.tags)
    const [tagsBackend, setTagsBackend] = useState([])
    const userFirstName = useSelector(state => state.user.first_name)
    const maxImageFileSize = 3145728
    const maxNumberFiles = 5
    const [message, setMessage] = useState("no")
    const [imagesPath, setImagesPath] = useState([])

    useEffect(
        () => {
     
            
            if (tags === "notFetched") {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = "\n";

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    //body: raw,
                    redirect: 'follow'
                };

                fetch(`${baseUrl}/backend/api/tags/`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        dispatch(fetchingTags({
                            tags: result
                        }))
                        setTagsBackend(result)

                    }
                    )
                    .catch(error => console.log('error', error));

           }
        }, []
    )

    const handleFileUpload = (event) => {
        event.preventDefault()
        setMessage("no")
        const images = event.target.files
        const numberImages = Object.keys(images).length
        //console.log(images)
        //console.log(`number images: ${numberImages}`)
        if (numberImages === 0) {
            setMessage("noImageSelected")
        }
        else {
            if (numberImages > 5) {
                setMessage("fileQuantityError")
            }
            else {
                for (let i = 0; i < numberImages; i++) {
                    console.log(images[`${i}`].size)
                    if (images[`${i}`].size > maxImageFileSize) {
                        setMessage("fileSizeExceededLimit");
                        break;
                    }

                }
                if (message === "no") {
                    const imagesUrl = []
                    for (let j = 0; j < numberImages; j++) {
                        let imageUrl = URL.createObjectURL(event.target.files[`${j}`])
                        imagesUrl.push(imageUrl)
                    }

                    setImagesPath(imagesUrl)
                    console.log(imagesPath)
                }
            }
        }

    }
    return (
        <ContainernewOffer>
            <Header></Header>
            {
                userFirstName === "NoNa"
                    ?
                    <div className="fontSize accessDenied">
                        Please sign in to the place a new offer. 😋
                    </div>
                    :
                    <div
                        className="offerContentSection">
                        <Header2
                            className="fontSize">What do like to give away?</Header2>
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
                                    message === "noImageSelected"
                                        ?
                                        <div className="fontSize">
                                            {`Offers require an image. 😉`}
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
                                id="title"></input>
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
                                id="description"></input>
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
                                htmlFor="request"
                            >
                                Requested:
                            </label>
                            <input
                                className="fontSize"
                                id="request"></input>
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
                        >Save</TextButton>
                    </div>
            }

            <FooterElement></FooterElement>
        </ContainernewOffer>
    );
}

export default NewOffer;