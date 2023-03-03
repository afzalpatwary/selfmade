import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {

        const count = this.state.count

        return (
            <div className='sectionPadding'>
                <div className='container'>
                    <div className='countBox fs-2 bg-light p-4 rounded-5 text-center'>
                        <h2> Count : {count} </h2>
                        <div className='btnCount d-flex gap-3 align-items-center justify-content-center'>
                            <button className='btn px-4 py-3 bg-dark text-white' onClick={this.handleIncrement}>+</button>
                            <button className='btn px-4 py-3 bg-dark text-white' onClick={this.handleDecrement} disabled={count === 0 ? true : false}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
