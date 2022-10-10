import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'>Header</Link>
            <Link to='/blog'>Blog</Link>
            <h2>This is header</h2>
        </div>
    );
};

export default Header;