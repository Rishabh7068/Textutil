import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TextArea from './component/TextArea';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [darkmode ,setDarkmode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if(darkmode === 'light'){
      setDarkmode('dark');
      document.body.style.backgroundColor ='#212529';
      showAlert("Dark mode is enable" ,"success");
    }else{
      document.body.style.backgroundColor ='#f8f9fa';
      setDarkmode('light');
      showAlert("Light mode is enable" ,"success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/about'
        element={
            <><Header title="TextUtil" mode={darkmode} togglemode={toggleMode} /><Alert alert={alert} /><About mode={darkmode} /></>
        }/>
          <Route path='/'
        element={
            <><Header title="TextUtil" mode={darkmode} togglemode={toggleMode} /><Alert alert={alert} /><TextArea heading="Try TextUtil - Word Counter , Character Couner, Remove Extra Spaces" mode={darkmode} showAlert={showAlert} /></>
        }/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
