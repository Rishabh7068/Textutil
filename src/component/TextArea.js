import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextArea(props) {

  const handelonclickup = ()=>{
    let nexText = text.toUpperCase();
    setText(nexText);
    props.showAlert("Converted to Upper case","success");
  }
  const handleonClicklo = ()=>{
    let nexText = text.toLowerCase();
    setText(nexText);
    props.showAlert("Converted to Lower case","success");
  } 

  const handlecopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");
  } 

  const handleexspace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space","success");
  } 

  const handleonClickct = ()=>{
    let nexText = "";
    setText(nexText);
    props.showAlert("Text Cleared","success");
  } 

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const[text,setText] = useState("");

  return (
    <>
    <div className="container">
        <h1 style={{color : props.mode === 'dark' ? '#f8f9fa' : '#343a40'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark' ? '#343a40' : '#f8f9fa',
            color : props.mode === 'dark' ? '#f8f9fa' : '#343a40'
            }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handleonClicklo}>Convert to LowerCase</button>
        <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handleonClickct}>Clear Text</button>
        <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handelonclickup}  >Convert to UpperCase</button>
        <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handleexspace}>Remove extra space</button>
    </div>
    <div className="container my-2 " style={{color : props.mode === 'dark' ? '#f8f9fa' : '#343a40'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((ele) => {return ele.length !==0 }).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Require to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
    </div>
    </>
    
  )
}

TextArea.prototype = {
    heading : PropTypes.string.isRequired
};

TextArea.defaultProps = {
    heading : "Send heading Prop"
};
