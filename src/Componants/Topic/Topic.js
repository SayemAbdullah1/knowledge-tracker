import './Topic.css'
import React from 'react';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div className='topic-info'>

            <div className='details'>
            <h3>{name}</h3>
            <p id='total'><small>Total: {total}</small></p>
            </div>

            <div>
                    <button className='btn'><strong>Start quiz</strong></button>
            </div>

            </div>


            </div>
    );
};

export default Topic;