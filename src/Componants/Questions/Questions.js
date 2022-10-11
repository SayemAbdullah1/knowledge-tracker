import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Options from '../Options/Options';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';

const Questions = ({ totalQuestion }) => {
    const { question, correctAnswer } = totalQuestion
    // console.log(correctAnswer)
    const notify = () => toast(correctAnswer);
    return (
        <div className='question'>
            <div className='questionIcon'>
                <div>
                     <h4>{question} </h4>
                </div>
                <div>
                    <button onClick={notify} className='icon'><FontAwesomeIcon icon={faEye}/></button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>
            
            {
                totalQuestion.options.map(toOption => <Options
                    toOption={toOption}
                    // key = {id}
                ></Options>
                )
            }
        </div>
    );
};

export default Questions;