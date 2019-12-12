import React from 'react';
import logo from '../assets/images/moller.png'

const InnerComponent = ({}) => (
    <>
        <span>INNER 123</span>
        <img src={logo}/>
    </>
);

InnerComponent.propTypes = {};

export default InnerComponent;
