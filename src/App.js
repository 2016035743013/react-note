import React, { Component } from 'react';
import './App.css'

function UserGreeting() {
    return (
        <h1>
            hello guys;
        </h1>
    )
}

function GuestGreeging() {
    return (
        <h1>
            please sign up;
        </h1>
    )
}

function Greeting(props) {
    if (props.isLogin) {
        return (<UserGreeting></UserGreeting>);
    } else {
        return (<GuestGreeging></GuestGreeging>)
    }
}

class LoginControl extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }
    handleLogin() {
        this.setState({
            isLogin: true
        })
    }
    handleLogout() {
        this.setState({
            isLogin: false
        })
    }

    render() {
        let button;
        const isLogin = this.state.isLogin;
        if(isLogin) {
            button = <button onClick={this.handleLogout.bind(this)}>登出</button>;
        } else {
            button = <button onClick={this.handleLogin.bind(this)}>登陆</button>;
        }
        return (
            <>
                <Greeting isLogin={this.state.isLogin} />
                {button}
            </>
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
                <LoginControl  />
            </div>
        )
    }
} 
