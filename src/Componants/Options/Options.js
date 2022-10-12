import React from 'react';
import './Options.css'

const Options = ({ toOption }) => {
    // const { correctAnswer } = totalQuestion
    // console.log(correctAnswer)

    return (
        <div className='option'>
            
            <p>
            <label><input type="radio" value="" name="name" /> {toOption}</label>
            </p>
        </div>
    );
};

export default Options;