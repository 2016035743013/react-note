import React, { Component } from 'react';
import './App.css'

class SearchBar extends Component {
    render() {
        return (
            <>
                <input type="text" />
                <div>
                    <input type="checkbox" />
                    only show products in stock
                </div>
            </>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.type}
                </span>
                <span>
                    {this.props.price}
                </span>
            </div>
        )
    }
}
class Products extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.name}
                </span>
                <span>
                    {this.props.price}
                </span>
            </div>
        )
    }
}
class ProductTable extends Component {
    render() {
        const data = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ];
        return (
            <>
                <SearchBar />
                <div>
                    <span>name</span> &emsp;
                    <span>Price</span>
                </div>
                <Title type={'sporting goods'} price={'Price'} />
                {
                    data.map((val, index) => {
                        return (
                            <Products key={index} name={val.category} price={val.price} />
                        )
                    })
                }
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
            <>
                <ProductTable />
            </>
        )
    }
} 
