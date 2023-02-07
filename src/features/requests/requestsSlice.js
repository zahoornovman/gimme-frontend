import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    requests: [
        {
            author: "Christian",
            created_time: "31.01.2023",
            updated_time: "01.02.2023",
            tags: "toy",
            images: ["https://m.media-amazon.com/images/G/30/apparel/rcxgs/tile._CB483369954_.gif"],
            description: "I'm collecting monopoly games related to different cities and locations around the world. I'm muissing the edition catalunya.",
            title: "Monopoly de Cataluña",
            condition: "usable",
            offers: "Samsung Galaxy A51, edition 2020, heavily used, but working",
        },
        {
            author: "Mariona",
            created_time: "30.01.2023",
            updated_time: "30.01.2023",
            tags: "phone",
            images: [],
            description: "I've lost my smartphone cover for my Huwaii phone on the flixbus. I'm looking for a replacement, such as a big sock.",
            title: "Smart phone cover for a Huwaii smart phone",
            condition: "good",
            offers: "gloves",
        },
        {
            author: "Stephanie",
            created_time: "28.01.2023",
            updated_time: "29.01.2023",
            tags: "sport",
            images: ["https://cdn11.bigcommerce.com/s-vlpxa0d8m1/images/stencil/1280x1280/attribute_rule_images/109336_source_1669055106.jpg"],
            description: "color: rose, size: s",
            title: "ballet dress for women",
            condition: "no damages",
            offers: "ballett shoe",
        }
    ]

}
const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        loading: (state) => {
            state.loading = "true"
        },
        successfulSignIn: (state, { payload }) => {
            state.id = payload.id;
            state.email = payload.email;
            state.first_name = payload.first_name;
            state.last_name = payload.last_name;
            state.username = payload.username;
            state.location = payload.location;
            state.refresh = payload.refresh;
            state.acces = payload.acces;
            state.loading = "completed"
        },
        errorSignIn: (state) => {
            state.loading = "error"
        },
        signout: (state) => {
            state.id = "";
            state.email = "";
            state.first_name = "NoNa";
            state.last_name = "";
            state.username = "";
            state.location = "";
            state.refresh = "";
            state.acces = "";
            state.loading = "false";
        }
    }
})

const loading = requestsSlice.actions.loading;
const successfulSignIn = requestsSlice.actions.successfulSignIn;
const errorSignIn = requestsSlice.actions.errorSignIn;
const signOut = requestsSlice.actions.signout
const reducer = requestsSlice.reducer;

export { loading, successfulSignIn, errorSignIn, signOut, reducer }