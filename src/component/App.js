import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home} />
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;