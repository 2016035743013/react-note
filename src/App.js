import React, { Component } from 'react';
import './App.css'


// class Event extends Component {
//     constructor() {
//         super();
//     }
//     handleClick(event) {
//         // react阻止默认行为不能够使用return false 而应该使用event.preventDefault()
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <>
//                 <a href='http://www.baidu.com' onClick={this.handleClick}>百度</a>
//             </>
//         )
//     }
// }

class Toggle extends Component {
    constructor() {
        super();
        this.state = {
            isOne: true
        }
        // this.handleToggle = this.handleToggle.bind(this) //需要在这里绑定this，否则后面如果直接调用的handletoggle方法时，方法内this的指向绘制undefined 或者在给元素绑定标签的时候使用箭头函数，然后在箭头函数里面调用handletoggle方法 或者在定义方法的时候使用表达式语法例如 const a = ()=>{}，但是，这是个实验性的语法
        // 在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。
    }
    handleToggle(e) {
        this.setState((preState, props) => {
            return {
                isOne: !preState.isOne
            }
        })
    }
    render() {
        return (
            <button onClick={(e) => {this.handleToggle(e)}}>
                {this.state.isOne ? 'On' : 'Off'}
            </button>
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
                <Toggle />
            </div>
        )
    }
} 
