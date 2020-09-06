import React from 'react';
import './Contacts.css';
import Header from '../Header/Header'

const Contacts = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="contactSection">
                <h3>Developed by</h3>
                <h2>Mir Tauhidul Islam</h2>
                <h4>mail.tauhidul@gmail.com</h4>
            </div>
        </div>
    );
};

export default Contacts;