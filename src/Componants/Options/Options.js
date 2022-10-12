import React from 'react';
import './Options.css'
import { ToastContainer, toast } from 'react-toastify';

const Options = ({ toOption, correctAnswer, id}) => {
    // console.log(correctAnswer)
    const handleClick = (toOption, correctAnswer) =>{
        if(toOption === correctAnswer){
            toast.success('Correct Answer');
        } else{
            toast.error('Wrong Answer');
        }
    }
    return (
        <div className='option'>
            
            <p >
                <label>
                    <input onClick={() => handleClick(toOption, correctAnswer)} type="radio" value="" name={id} /> {toOption}
                    <ToastContainer position='top-center'></ToastContainer>
                </label>
            </p>
            
        </div>
    );
};

export default Options;