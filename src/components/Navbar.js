import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">SOCIALIZE</Link>
            <div className="nav-links">
                <Link to="/create">Create Post</Link>
                <Link to="/login">Login</Link>
                <Link to="/Sign Up">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
