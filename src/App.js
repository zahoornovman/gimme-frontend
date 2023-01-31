import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Welcome from './components/Welcome';
import Error from './components/Error';



function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path='/' element={<Welcome />}></Route>        
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
