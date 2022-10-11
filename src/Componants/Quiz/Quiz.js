import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Options from '../Options/Options';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    const newQuiz = quiz.data
    // console.log(newQuiz)
    const { name } = newQuiz;
    return (
        <div className='quiz'>
            <h2>Quiz of: {name}</h2>
            {
                newQuiz.questions.map(totalQuestion => <Questions
                    totalQuestion={totalQuestion}
                ></Questions>)
            }
            
        </div>
    );
};

export default Quiz;