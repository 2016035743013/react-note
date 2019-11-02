import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css'

const userName = {
    firstName: 'cjhcj',
    lastName: 'zhang'
}
const formatName = () => {
    return userName.firstName + userName.lastName;
}
// const element = <div>{formatName()}</div>

// Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用
const element = React.createElement(
    'div',
    {className: 'div'},
    formatName()
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
