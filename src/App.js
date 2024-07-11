import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TextArea from './component/TextArea';


function App() {
  const [darkmode ,setDarkmode] = useState('light');
  const toggleMode = () => {
    if(darkmode === 'light'){
      setDarkmode('dark');
      document.body.style.backgroundColor ='#212529';
    }else{
      document.body.style.backgroundColor ='#f8f9fa';
      setDarkmode('light');
    }
  }
  return (
    <>
    <Header title = "TextCon" mode={darkmode}  togglemode={toggleMode}/>
    <div className="container">
      <TextArea heading = "Enter text here" mode={darkmode}/>
    </div>
    </>
  );
}

export default App;
