import React from 'react';
import Options from '../Options/Options';
import './Questions.css'

const Questions = ({ totalQuestion }) => {
    const { question } = totalQuestion
    return (
        <div className='question'>
            <h4>{question}</h4>
            <p><i class="fa-duotone fa-eye"></i></p>
            {
                totalQuestion.options.map(toOption => <Options
                    toOption={toOption}
                ></Options>
                )
            }
        </div>
    );
};

export default Questions;