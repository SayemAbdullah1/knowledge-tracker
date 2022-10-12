import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2>Knowledge tracker</h2>
            </div>
            <div className='link'>
                {/* <Link to='/'>Header</Link> */}
                <NavLink id='nav' className={({ isActive }) => isActive ? 'active' : undefined}></NavLink>
                <NavLink to='/home'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                
            </div>
            
        </div>
    );
};

export default Header;