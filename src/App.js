import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './Login';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import CreatePost from './CreatePost';
import axios from 'axios';


import './App.css';
import './login.css';
import './SignUp.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
           
            <Footer />
        </div>
    );
}

export default App;