import React, { Component } from 'react';
import './App.css'

// class From extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleSubmit(event) {

//         console.log('submit !!!!');
//         event.preventDefault();
//     }
//     handleChange(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     render() {
//         return (
//             <form>
//                 <label htmlFor="" onSubmit={this.handleSubmit}>
//                     姓名：
//                     <input type="text" onChange={this.handleChange} value={this.state.name} placeholder='请输入姓名'/>
//                 </label>
//                 <input type="submit" value='提交'/>
//             </form>
//         )
//     }
// }

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    参与:
            <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    来宾人数:
            <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export class App extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div>
                <Reservation />
            </div>
        )
    }
} 
