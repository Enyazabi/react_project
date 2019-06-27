import React from 'react';
import './App.css';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import Home from './HomeComponent.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
        <div className="App">


                <Header/>
                <Route exact path="/home" component={Home}/>

                <Footer/>


        </div>
        </BrowserRouter>
    );

}

export default App;
