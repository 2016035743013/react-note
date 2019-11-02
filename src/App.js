import React, { Component } from 'react';
import './App.css'

class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        
        console.log('submit !!!!');
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="" onSubmit={this.handleSubmit}>
                    姓名：
                    <input type="text" onChange={this.handleChange} value={this.state.name} placeholder='请输入姓名'/>
                </label>
                <input type="submit" value='提交'/>
            </form>
        )
    }
}

export class App extends Component {
    constructor() {
        super();
    }
    render() {
        
        return (
            <div>
                <From />
            </div>
        )
    }
} 
