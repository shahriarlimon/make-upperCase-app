import React, { useState } from 'react';

const Form = (props) => {
    const handleUpClick=()=>{
        setText(text.toUpperCase())
    };
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter the text');
    return (
        <div>
            
          <div className="mt-3 container">
             <h3>{props.heading}</h3>
             <textarea onChange={handleOnChange} className="form-control my-3" id="myBox" value={text} rows="8"></textarea>
             <button onClick={handleUpClick} className='btn btn-primary'>Conver to UpperCase</button>
         </div>
        </div>
    );
};

export default Form;