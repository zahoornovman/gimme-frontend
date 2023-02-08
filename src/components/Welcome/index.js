
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from "../../elements/Header";
import FooterElement from "../../elements/Footer";
import { ContainerWelcome } from "./styles";
import { baseUrl } from "../../baseurl";
import { fetchingTags } from "../../features/tags/tagsSlice";
import { useSettingTags } from "../../hooks/tagsFetch";



function Welcome() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [tags, setTagsBackground] = useState([]);
    const tag = useSelector((state) => state.tags.tags);

    useSettingTags();
    useEffect(() => {
        setTagsBackground(tag);
    }, [tag]);




    // useEffect(
    //     () => {
    //         var myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");

    //         var raw = "\n";

    //         var requestOptions = {
    //             method: 'GET',
    //             headers: myHeaders,
    //             //body: raw,
    //             redirect: 'follow'
    //         };

    //         fetch(`${baseUrl}/backend/api/tags/`, requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 dispatch(fetchingTags({
    //                     tags: result
    //                 }))

    //                 setTags(result)
    //                 }
    //                 )
    //             .catch(error => console.log('error', error));
    //     }, []
    // )


    return (

        <ContainerWelcome>
            <Header></Header>
            {
                tags === "notFetched"
                    ?
                    <div className="loading" id="loading">
                        loading
                    </div>                   
                        :
                        <>
                            <div>{user.first_name}</div>
                            {
                                tags.map((tag, index) =>
                                    <div
                                        key={index}
                                        id={index}
                                    >
                                        {
                                            `${tag.id}: ${tag.title}`
                                        }
                                    </div>
                                )
                            }
                        </>
            }

            <FooterElement></FooterElement>
        </ContainerWelcome>

    );
}

export default Welcome;