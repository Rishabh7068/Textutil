import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextArea(props) {

  const handelonclickup = ()=>{
    let nexText = text.toUpperCase();
    setText(nexText);
  }
  const handleonClicklo = ()=>{
    let nexText = text.toLowerCase();
    setText(nexText);
  } 

  const handlecopy = ()=>{
    navigator.clipboard.writeText(text);
  } 

  const handleexspace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  } 

  const handleonClickct = ()=>{
    let nexText = "";
    setText(nexText);
  } 

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const[text,setText] = useState("");

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <buttton className="btn btn-primary mx-1" onClick={handelonclickup}>Convert to UpperCase</buttton>
        <buttton className="btn btn-primary mx-1" onClick={handleonClicklo}>Convert to UpperCase</buttton>
        <buttton className="btn btn-primary mx-1" onClick={handleonClickct}>Clear Text</buttton>
        <buttton className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</buttton>
        <buttton className="btn btn-primary mx-1" onClick={handleexspace}>Remove extra space</buttton>
    </div>
    <div className="container my-2">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Require to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
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
