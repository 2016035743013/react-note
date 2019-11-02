import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css'



const element = (
    <div>
        <span>
            {new Date().getTime()}
        </span>
    </div>
)
export class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {element}
            </div>
        )
    }
} 
