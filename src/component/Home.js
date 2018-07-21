import React, { Component } from 'react';


// components
import Featured from './Featured'
import Subscriptions from './Subscriptions'
import Blocks from './Blocks';


const urlHome = 'http://localhost:3004/home'
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            home: ''
        }
    }

    componentDidMount(){
        fetch(urlHome, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                home: response
            })
        })

    }

    render(){
        return(
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscriptions/> 
                <Blocks/>
            </div>
        )
    }
}

export default Home