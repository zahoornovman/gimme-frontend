import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Welcome from './components/Welcome';
import Error from './components/Error';
import SignIn from './components/SignIn';
import PasswordForgotten from './components/PasswordForgotten';
import Contact from './components/Admin/Contact';
import FAQ from './components/Admin/FAQ';
import Profile from './components/Admin/Profile';
import TermsOfUse from './components/Admin/TermsOfUse';
import AllLikes from './components/Likes/All';
import MyLikes from './components/Likes/My';
import NewLike from './components/Likes/New';
import OneLike from './components/Likes/One';
import AllOffers from './components/Offers/All';
import MyOffers from './components/Offers/My';
import NewOffer from './components/Offers/New';
import OneOffer from './components/Offers/One';
import SignUp from './components/SignUp';
import SignUpValidation from './components/SignUpValidation'
import UpdateUserProfile from './components/Admin/ProfileUpdate';
import ProfileDeleteError from './components/ProfileDeleteError';
import ProfileChangeError from './components/ProfileChangesError';
import SingUpValidationError from './components/SignUpValidationError';



function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path='/' element={<Welcome />}></Route> 
        <Route path="/signin" element={<SignIn/>}></Route> 
        <Route path='/passwordreset' element={<PasswordForgotten/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signup/validation' element={<SignUpValidation/>}></Route>
        <Route path='/signup/validation/error' element={<SingUpValidationError/>}></Route>
        {/*admin*/}
        <Route path='/admin/contact' element={<Contact/>}></Route>
        <Route path='/admin/faq' element={<FAQ/>}></Route>
        <Route path='/admin/profile' element={<Profile/>}></Route>
        <Route path='/admin/profile/update' element={<UpdateUserProfile/>}></Route>
        <Route path='/admin/profile/deleteerror' element={<ProfileDeleteError/>}></Route>
        <Route path='/admin/profile/changeserror' element={<ProfileChangeError/>}></Route>
        <Route path='/admin/termsofuse' element={<TermsOfUse/>}></Route>
        {/*likes*/}
        <Route path='/likes/all' element={<AllLikes/>}></Route>
        <Route path='/likes/my' element={<MyLikes/>}></Route>
        <Route path='/likes/new' element={<NewLike/>}></Route>
        <Route path='/likes/one' element={<OneLike/>}></Route>
        {/*offers*/}
        <Route path='/offers/all' element={<AllOffers/>}></Route>
        <Route path='/offers/my' element={<MyOffers/>}></Route>
        <Route path='/offers/new' element={<NewOffer/>}></Route>
        <Route path='/offers/one' element={<OneOffer/>}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
