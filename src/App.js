import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TextArea from './component/TextArea';
import Alert from './component/Alert';


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
    <Header title = "TextUtil" mode={darkmode}  togglemode={toggleMode}/>
    <div>
    <Alert alert={alert}/>
    </div>
    
    <div className="container">
      <TextArea heading = "Enter text here" mode={darkmode}  showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
