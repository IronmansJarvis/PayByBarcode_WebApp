import React from 'react';
import '../components/Home/Nav-Bar.styles.css';

export const NavBar = props => (
    <div className = 'NavBar'>
        <button url="http://paybybarcode.fun">Home</button>
        <button>Settings</button>
        <button>Profile</button>
        <button>Contact Support</button>
    </div>
    );
