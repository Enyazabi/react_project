import React from 'react';
import './App.css';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import Home from './HomeComponent.jsx';
import CatalogComponent from './CatalogComponent.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import SignInComponent from "./SignInComponent";

function App() {

    return (
        <BrowserRouter>
        <div className ="App">
            <Header/>
            <Route exact path ="/" component = {Home}/>
            <Route path = "/catalog" component = {CatalogComponent}/>
            <Route path = "/signin" component = {SignInComponent}/>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
