import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    adds_offered: [
        {
            author: "Christian",
            created_time: "01.02.2023",
            updated_time: "01.02.2023",
            images: ["https://de.wikipedia.org/wiki/Samsung_Galaxy_A51#/media/Datei:Samsung_Galaxy_A51_front.png"],
            tags: ["phone", "multimedia"],
            description: "2 year old Samsung Galaxy A51, black. It has been heavily used. Display is okay. No damages visible. No warranty.",
            title: "Samsung Galaxy A51 (2020 edition)",
            condition: "used",
            likes: "Apple iPhone"
        },
        {
            author: "Mariona",
            created_time: "01.02.2023",
            updated_time: "01.02.2023",
            images: ["https://de.wikipedia.org/wiki/Samsung_Galaxy_A3#/media/Datei:Samsung_A3_2016.png", "https://de.wikipedia.org/wiki/Samsung_Galaxy_A3#/media/Datei:Samsung_Galaxy_A3.png", "https://de.wikipedia.org/wiki/Samsung_Galaxy_A3#/media/Datei:Samsung_Galaxy_A3_2017.png"],
            tags: ["phone", "multimedia"],
            description: "2 year old Samsung Galaxy A3, black. It has been heavily used. Display is okay. No damages visible. No warranty.",
            title: "Samsung Galaxy A3 (2017 edition)",
            condition: "used",
            likes: "Samsung Galaxy A51"
        },
        {
            author: "Robin",
            created_time: "31.01.2023",
            updated_time: "31.01.2023",
            images: ["https://www.herpa.de/_default_upload_bucket/534512_a.jpg"],
            tags: ["toys"],
            description: "1:500, aircraft modell",
            title: "Air India, Boeing 787",
            condition: "good",
            likes: "Lufthansa Airbus A380"
        }
    ]

}
const offersSlice = createSlice({
    name: 'offers',
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

const loading = offersSlice.actions.loading;
const successfulSignIn = offersSlice.actions.successfulSignIn;
const errorSignIn = offersSlice.actions.errorSignIn;
const signOut = offersSlice.actions.signout
const reducer = offersSlice.reducer;

export { loading, successfulSignIn, errorSignIn, signOut, reducer }