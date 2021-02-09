import React from 'react';
import './errorMessage.css';
import img from './GoT.jpg';

const ErrorMessage = () => {
    return (
        <>
        <img src={img} alt='error'></img>
        <span>Smth goes wrong</span>
        </>
    )
}

export default ErrorMessage;