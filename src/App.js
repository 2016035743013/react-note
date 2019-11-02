import React, { Component } from 'react';
import './App.css'

class Left extends Component {
    render() {
        return (
            <>
                <span>left</span>
            </>
        )
    }
}

class Right extends Component {
    render() {
        return (
            <>
                <span>Right</span>
            </>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <>
                {this.props.left}
                {this.props.right}
            </>
        )
    }
}

export class App extends Component {
    handleChange(value) {
        this.setState({
            value
        })
    }
    render() {
        
        return (
            <div>
               <Main left={<Left />} right = {<Right />} />
            </div>
        )
    }
} 
