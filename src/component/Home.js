import React, { Component } from 'react';


// components
import Featured from './Featured'

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
            </div>
        )
    }
}

export default Home