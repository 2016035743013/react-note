import React, { Component } from 'react';
import ReactDom from 'react-dom'

import { App } from './App'

setInterval(() => {
    ReactDom.render(
        <>
        <App />
        {new Date().getTime()}
        </>,
        document.getElementById('root')
    
    )
}, 100);