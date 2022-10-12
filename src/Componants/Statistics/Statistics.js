import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'


const Statistics = () => {
    const statistics = useLoaderData()
    const newStatistics = statistics.data
    return (
        <div className='chart'>
            <h1>Chart data with total quiz</h1>
            <div className='chartData'>
                <ResponsiveContainer width= '90%' height={400}>
                    <LineChart data={newStatistics}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />

                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;