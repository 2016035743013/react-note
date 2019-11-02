import React, { Component } from 'react';
import './App.css'

class Test1 extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.change(e.target.value);
    }
    render() {
        return (
            <input type="text" value={this.props.value} onChange={this.handleChange}/>
        )
    }
}

class Test2 extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.change(e.target.value);
    }
    render() {
        return (
            <input type="text" value={this.props.value} onChange={this.handleChange}/>
        )
    }
}

export class App extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 99
        }
    }
    handleChange(value) {
        this.setState({
            value
        })
    }
    render() {
        let test1 = this.state.value;
        let test2 = this.state.value;
        return (
            <div>
                <Test1 value={test1} change = {this.handleChange} />
                <Test2 value={test2} change = {this.handleChange} />
            </div>
        )
    }
} 
