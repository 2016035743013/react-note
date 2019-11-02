import React, { Component } from 'react';
import './App.css'

class Blog extends Component {
    constructor() {
        super();
    }
    render() {
        console.log(this.props.blogs);
        let blogs = this.props.blogs;
        const article = (
            <ul>
                {
                    blogs.map((val, index) => {
                        return (
                            <li key={val.id}>
                                {val.content}
                            </li>
                        )
                    })
                }
            </ul>
        )
        return (
            <div>
                {article}
            </div>
        )
    }
}
export class App extends Component {
    constructor() {
        super();
    }
    render() {
        const data = [
            { id: 1, title: 'test', content: 'hello test' },
            { id: 2, title: 'world', content: 'hello world' }
        ]
        return (
            <div>
                <Blog blogs={data} />
            </div>
        )
    }
} 
