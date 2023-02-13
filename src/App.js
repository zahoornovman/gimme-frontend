import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./components/Welcome";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import PasswordForgotten from "./components/PasswordForgotten";
import Contact from "./components/Admin/Contact";
import FAQ from "./components/Admin/FAQ";
import Profile from "./components/Admin/Profile";
import TermsOfUse from "./components/Admin/TermsOfUse";
import AllRequests from "./components/Request/All";
import MyRequests from "./components/Request/My";
import NewRequest from "./components/Request/New";
import RequestDetails from "./components/Request/One";
import AllOffers from "./components/Offers/All";
import MyOffers from "./components/Offers/My";
import NewOffer from "./components/Offers/New";
import OfferDetails from "./components/Offers/One";
import SignUp from "./components/SignUp";
import SignUpValidation from "./components/SignUpValidation";
import UpdateUserProfile from "./components/Admin/ProfileUpdate";
import ProfileDeleteError from "./components/ProfileDeleteError";
import ProfileChangeError from "./components/ProfileChangesError";
import SingUpValidationError from "./components/SignUpValidationError";
import MessageService from "./components/Message";
import UpdateOffer from "./components/Offers/Update";
import UpdateRequest from "./components/Request/Update";
import AllrequestsRelatedToTag from "./components/Request/Tags";
import AllOffersRelatedToTag from "./components/Offers/Tags";

//import NewRequest from "./components/Request/New";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/passwordreset" element={<PasswordForgotten />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signup/validation" element={<SignUpValidation />}></Route>
        <Route
          path="/signup/validation/error"
          element={<SingUpValidationError />}
        ></Route>
        {/*admin*/}
        <Route path="/admin/contact" element={<Contact />}></Route>
        <Route path="/admin/faq" element={<FAQ />}></Route>
        <Route path="/admin/profile" element={<Profile />}></Route>
        <Route
          path="/admin/profile/update"
          element={<UpdateUserProfile />}
        ></Route>
        <Route
          path="/admin/profile/deleteerror"
          element={<ProfileDeleteError />}
        ></Route>
        <Route
          path="/admin/profile/changeserror"
          element={<ProfileChangeError />}
        ></Route>
        <Route path="/admin/termsofuse" element={<TermsOfUse />}></Route>
        {/*requests*/}
        <Route path="/requests/all" element={<AllRequests />}></Route>
        <Route path="/requests/my" element={<MyRequests />}></Route>
        <Route path="/requests/new" element={<NewRequest />}></Route>
        <Route path="/requests/:id" element={<RequestDetails />}></Route>
        <Route path="/requests/update/:id" element={<UpdateRequest />}></Route>
        {/*offers*/}
        <Route path="/offers/all" element={<AllOffers />}></Route>
        <Route path="/offers/my" element={<MyOffers />}></Route>
        <Route path="/offers/new" element={<NewOffer />}></Route>
        <Route path="/offers/:id" element={<OfferDetails />}></Route>
        <Route path="/offers/update/:id" element={<UpdateOffer />}></Route>
        {/*message*/}
        <Route path="/message" element={<MessageService />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
