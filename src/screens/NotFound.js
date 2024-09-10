import React from 'react';
import notFoundImg from '../assets/images/404-page.png'
import '../assets/styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="flex">
            <div className="not-found">
                <img src={notFoundImg} alt='404'></img>
            </div>
        </div>
    );
};

export default NotFound;