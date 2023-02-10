import { createSlice } from "@reduxjs/toolkit";

//const initialState = {
//offers: "";
// [
// {
//   offerId: 0,
//   author: "Christian",
//   authorProfileId: 1,
//   authorUserId: 3,
//   authorUsername: "icecream",
//   authorLocation: "somewhere",
//   images: [
//     "https://media.istockphoto.com/id/89962491/de/foto/antikes-klavier-mit-path.jpg?s=1024x1024&w=is&k=20&c=1feevVGZ_twvVcAAIU9F8FUaEmF4JAUWUe6678m1hZw=",
//   ],
//   tagIds: [1, 2],
//   description:
//     "2 year old Samsung Galaxy A51, black. It has been heavily used. Display is okay. No damages visible. No warranty.",
//   title: "Samsung Galaxy A51 (2020 edition)",
//   condition: 3,
//   requestsForItem: "Apple iPhone",
//   created_time: "01.02.2023",
//   updated_time: "01.02.2023",
// },
// {
//   offerId: 1,
//   author: "Mariona",
//   authorProfileId: 1,
//   authorUserId: 3,
//   authorUsername: "icecream",
//   authorLocation: "somewhere",
//   images: [
//     "https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNvdXN0aWMlMjBndWl0YXJ8ZW58MHx8MHx8&w=1000&q=80",
//     "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL1007936_rt_q2qwiw.jpg",
//     "https://thumbs.dreamstime.com/b/guitar-16517374.jpg",
//   ],
//   tagIds: [3, 5],
//   description:
//     "2 year old Samsung Galaxy A3, black. It has been heavily used. Display is okay. No damages visible. No warranty.",
//   title: "Samsung Galaxy A3 (2017 edition)",
//   condition: 1,
//   requestsForItem: "Samsung Galaxy A51",
//   created_time: "01.02.2023",
//   updated_time: "01.02.2023",
// },
// {
//   offerId: 2,
//   author: "Robin",
//   authorProfileId: 1,
//   authorUserId: 3,
//   authorUsername: "icecream",
//   authorLocation: "somewhere",
//   images: ["https://www.herpa.de/_default_upload_bucket/534512_a.jpg"],
//   tagIds: [4],
//   description: "1:500, aircraft modell",
//   title: "Air India, Boeing 787",
//   condition: 2,
//   requestsForItem: "Lufthansa Airbus A380",
//   created_time: "31.01.2023",
//   updated_time: "31.01.2023",
// },
// {
//   offerId: 3,
//   author: "Mariona",
//   authorProfileId: 1,
//   authorUserId: 3,
//   authorUsername: "icecream",
//   authorLocation: "somewhere",
//   images: [
//     "https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNvdXN0aWMlMjBndWl0YXJ8ZW58MHx8MHx8&w=1000&q=80",
//     "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL1007936_rt_q2qwiw.jpg",
//     "https://thumbs.dreamstime.com/b/guitar-16517374.jpg",
//   ],
//   tagIds: [3, 5],
//   description:
//     "2 year old Samsung Galaxy A3, black. It has been heavily used. Display is okay. No damages visible. No warranty.",
//   title: "Samsung Galaxy A3 (2017 edition)",
//   condition: 1,
//   requestsForItem: "Samsung Galaxy A51",
//   created_time: "01.02.2023",
//   updated_time: "01.02.2023",
// },
// {
//   offerId: 4,
//   author: "Robin",
//   authorProfileId: 1,
//   authorUserId: 3,
//   authorUsername: "icecream",
//   authorLocation: "somewhere",
//   images: ["https://www.herpa.de/_default_upload_bucket/534512_a.jpg"],
//   tagIds: [4],
//   description: "1:500, aircraft modell",
//   title: "Air India, Boeing 787",
//   condition: 2,
//   requestsForItem: "Lufthansa Airbus A380",
//   created_time: "31.01.2023",
//   updated_time: "31.01.2023",
// },
// {
//   offerId: 5,
//   author: "Christian",
//   authorProfileId: 1,
//   authorUserId: 3,
//   authorUsername: "icecream",
//   authorLocation: "somewhere",
//   images: [
//     "https://media.istockphoto.com/id/89962491/de/foto/antikes-klavier-mit-path.jpg?s=1024x1024&w=is&k=20&c=1feevVGZ_twvVcAAIU9F8FUaEmF4JAUWUe6678m1hZw=",
//   ],
//   tagIds: [1, 2],
//   description:
//     "2 year old Samsung Galaxy A51, black. It has been heavily used. Display is okay. No damages visible. No warranty.",
//   title: "Samsung Galaxy A51 (2020 edition)",
//   condition: 3,
//   requestsForItem: "Apple iPhone",
//   created_time: "01.02.2023",
//   updated_time: "01.02.2023",
// },
//],
//};
const offersSlice = createSlice({
  name: "offers",
  initialState: { offers: "notFetched" },
  reducers: {
    setOffers: (state, { payload }) => {
      console.log("Entering slice to set offers");
      state.offers = payload;
      console.log(payload);
    },
    // loading: (state) => {
    //   state.loading = "true";
    // },
    // successfulSignIn: (state, { payload }) => {
    //   state.id = payload.id;
    //   state.email = payload.email;
    //   state.first_name = payload.first_name;
    //   state.last_name = payload.last_name;
    //   state.username = payload.username;
    //   state.location = payload.location;
    //   state.refresh = payload.refresh;
    //   state.acces = payload.acces;
    //   state.loading = "completed";
    // },
    // errorSignIn: (state) => {
    //   state.loading = "error";
    // },
    // signout: (state) => {
    //   state.id = "";
    //   state.email = "";
    //   state.first_name = "NoNa";
    //   state.last_name = "";
    //   state.username = "";
    //   state.location = "";
    //   state.refresh = "";
    //   state.acces = "";
    //   state.loading = "false";
    // },
  },
});

const setOffersInSlice = offersSlice.actions.setOffers;
// const loading = offersSlice.actions.loading;
// const successfulSignIn = offersSlice.actions.successfulSignIn;
// const errorSignIn = offersSlice.actions.errorSignIn;
// const signOut = offersSlice.actions.signout;
const reducer = offersSlice.reducer;

export {
  setOffersInSlice,
  // loading,
  // successfulSignIn,
  // errorSignIn,
  // signOut,
  reducer,
};
