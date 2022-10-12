import './Topic.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {

    const { id, name, logo, total } = topic;

    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/${id}`)
    }
    return (
        <div>
            
            <div className='topic'>
                <img src={logo} alt="" />
                <div className='topic-info'>

                    <div className='details'>
                        <h3>{name}</h3>
                        <p id='total'><small>Total: {total}</small></p>
                    </div>

                    <div>
                        <button onClick={handleNavigate} className='btn'><strong>Start quiz</strong></button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Topic;