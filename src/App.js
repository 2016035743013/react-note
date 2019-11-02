import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css'


// 类组件
class Clock extends Component {
    constructor() {
        super();
        this.state = ({
            date: new Date().getTime()
        })
    }
    tick = () => {
        this.timer = setInterval(() => {
            // 这里在setstate这里传入一个回调函数是因为state的更新是异步的，如果你需要用到之前的state里的一些参数，这里最好就是用prestate来获取state里的参数
            this.setState((preState, props) => {
                console.log(state, props);
                return {
                    date: new Date().getTime()
                }
            })
        }, 1000);
    }
    componentWillMount() {
        this.tick();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                {this.state.date}
            </div>
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
                <Clock />
            </div>
        )
    }
} 
