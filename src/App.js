import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Welcome from './components/Welcome';
import Error from './components/Error';
import SignIn from './components/SignIn';
import PasswordForgotten from './components/PasswordForgotten';



function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path='/' element={<Welcome />}></Route> 
        <Route path="/signin" element={<SignIn/>}></Route> 
        <Route path='/passwordreset' element={<PasswordForgotten/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
