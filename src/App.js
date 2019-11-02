import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css'


// 函数式组件
function YourComponent(props) {
    const formatName = () => {
        return props.firstName + props.lastName;
    }
    return (
        <>
            {formatName()}
        </>
    )
}
export class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <YourComponent firstName='cjhcj' lastName='zhang' />
            </div>
        )
    }
} 
