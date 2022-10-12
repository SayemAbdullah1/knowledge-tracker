import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topics.css'
import Topic from '../Topic/Topic';

const Topics = () => {
const topics = useLoaderData()
const newTopics = topics.data;
    // console.log(topics)
    return (
        <div>
            <div className='header-bar'>
                <p>You can test your skills with Knowledge tracker' Quiz. The test contains 40 questions and there is no time limit. The test is not official, it's just a nice way to see how much you know, or don't know, about HTML.</p>
            </div>
            <div className='topic-container'>
                {
                    newTopics.map(topic =><Topic
                    
                    topic={topic}
                    key = {topic.id}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;