import React from 'react';
import './Options.css'

const Options = ({ toOption }) => {
    // const { options } = toOption
    // console.log(toOption)
    return (
        <div className='option'>
            
            
            <p> <input type="radio" value="" name="name" /> {toOption}</p>
        </div>
    );
};

export default Options;