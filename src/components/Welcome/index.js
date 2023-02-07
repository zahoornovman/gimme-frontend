
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from "../../elements/Header";
import FooterElement from "../../elements/Footer";
import { ContainerWelcome } from "./styles";
import { baseUrl } from "../../baseurl";
import { fetchingTags } from "../../features/tags/tagsSlice";



function Welcome() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

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
    //                 console.log(result)}
    //                 )
    //             .catch(error => console.log('error', error));
    //     }, []
    // )

    return (
        <ContainerWelcome>
            <Header></Header>
            <div>{user.first_name}</div>
            <FooterElement></FooterElement>
        </ContainerWelcome>

    );
}

export default Welcome;