import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2>Knowledge tracker</h2>
            </div>
            <div className='link'>
                {/* <Link to='/'>Header</Link> */}
                <Link to='/'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            
        </div>
    );
};

export default Header;