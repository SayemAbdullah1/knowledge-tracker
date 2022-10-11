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
            <div>

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