import React from 'react';
import Options from '../Options/Options';
import './Questions.css'

const Questions = ({ totalQuestion }) => {
    const { question, id } = totalQuestion
    return (
        <div className='question'>
            <h4>{question}</h4>
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