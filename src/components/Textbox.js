import React, {useState} from 'react'

export default function Textbox(props) {
    const wordcount =(str)=>{
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str =str.replace(/[ ]{2,}/gi," ");
        str =str.replace(/\n /,"\n");
        return str.split(' ').length;
    }
    const handleClickcl = ()=>{
        setText("");
    }
    const handleClickup = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleClicklw = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClickcp = ()=>{
        let t=document.getElementById("floatingTextarea2");
        t.select();
        navigator.clipboard.writeText(t.value);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");
  return (
    <>
    <div className="form-floating">
        <h1 >{props.title}</h1>
    <textarea className="form-control " value={text} id="floatingTextarea2" onChange={handleOnChange} style={{height: '200px',backgroundColor : props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}></textarea>
    <div className='butn'>
        <button className="btn btn-primary my-3 MX-3 butnm" onClick={handleClickup}>Convert To UpperCase</button>
        <button className="btn btn-primary my-3 mx-3 butnm" onClick={handleClicklw}>Convert To LowerCase</button>
        <button className="btn btn-primary my-3 mx-3 butnm" onClick={handleClickcp}>Copy</button>
        <button className="btn btn-primary my-3 butnm" onClick={handleClickcl}>Clear</button>
    </div>
    </div>
    <div className="container my-3">
        <h1>YOU TEXT SUMMARY</h1>
        <p>WORDS = <b>{text.length>0?wordcount(text):0} words</b> CHARACTERS = <b>{text.length} characters</b> </p>
        <h2>PREVIEW</h2>
         <p>{text.length>0?text:"ENTER TEXT IN THE TEXTBOX ABOVE TO PREVIEW IT HERE"}</p>
    </div>    
    </>
  )
}
