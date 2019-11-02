import React, { Component } from 'react';
import ReactDom from 'react-dom'

import { App } from './App'

setInterval(() => {
    ReactDom.render(
        <>
        <App />
        </>,
        document.getElementById('root')
    
    )
}, 100);