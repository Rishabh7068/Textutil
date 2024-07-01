import './App.css';
import Header from './component/Header';
import TextArea from './component/TextArea';

function App() {
  return (
    <>
    <Header title = "TextCon"/>
    <div className="container">
      <TextArea heading = "Enter text here"/>
    </div>
    </>
  );
}

export default App;
