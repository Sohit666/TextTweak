import React, { useState } from 'react';

const Form = (props) => {

    const [ text, setText ] = useState("");
    const [ buttonText, setButtonText ] = useState("Copy Text");
    const [ btncolor, setBtnColor ] = useState("btn-primary");

    const onclickup = () => {
        // console.log("Uppercase button was clicked");
        setText(text.toUpperCase());
    };

    const onclicklo = () => {
        // console.log("Lowercase button was clicked");
        setText(text.toLowerCase());
    };

    const onclickrm = () => {
        // console.log("Remove Extra Spaces button was clicked");
        setText(text.replace(/\s+/g, ' ').trim());
    };

    const onclickcp = () => {
        // console.log("Copy Text button was clicked");
        navigator.clipboard.writeText(text);
        setButtonText("Text Copied");
        setBtnColor("btn-success");
        setTimeout(() => {
            setButtonText("Copy Text");
            setBtnColor("btn-primary");
        }, 2000);
    };

    const onclickcl = () => {
        // console.log("Clear Text button was clicked");
        setText("");
    }
    
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const linkTextColor = props.mode === 'dark' ? 'text-light' : 'text-dark';

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`${linkTextColor}`}>{props.heading}</label>
                <textarea
                    className="form-control border border-dark"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    value={text}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={onclickup}>UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onclicklo}>LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onclickrm}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onclickcl}>Clear Text</button>
            <button type="button" className={`btn ${btncolor} mx-2`} onClick={onclickcp}>{buttonText}</button>

            <h1 className={`${linkTextColor}`}>Summary</h1>
            <p className={`${linkTextColor}`}>Words {text.split(/\s+/).filter(word => word.length > 0).length} And Characters {text.length}</p>
        </>
    );
};

export default Form;
