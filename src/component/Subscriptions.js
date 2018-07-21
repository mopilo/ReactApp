//class based component

import React, { Component } from 'react'

export default class Subscriptions extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    onChangeInput = (e) => {
        this.setState({email: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;
         if (regex.test(email)) {
            this.saveEmail(email)
         }
         else{
             
         }
    }

    saveEmail = (email) => {
        const url = `http://localhost:3004/subcriptions`;

        fetch(url,{
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res=> res.json())
        .then(resp=> {
            this.setState({email: ''})
        })
    }

    render() {
        return (
        <div className="subscribe-panel">
            <h3>Subscribe to us</h3>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="your@email.com"
                        value = {this.state.email}
                        onChange = {this.onChangeInput}
                    >
                    </input>
                </form>
            </div>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </small>
        </div>
        )
    }
}
