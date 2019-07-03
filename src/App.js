import React from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import HomeComponent from "./HomeComponent.jsx";
import CatalogComponent from "./CatalogComponent.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import SignInComponent from "./SignInComponent";

function App() {

    return (

        <BrowserRouter>
        <div className ="App">
            <HeaderComponent/>
            <Route exact path ="/" component = {HomeComponent}/>
            <Route path = "/catalog" component = {CatalogComponent}/>
            <Route path = "/signin" component = {SignInComponent}/>
            <FooterComponent/>
        </div>
        </BrowserRouter>
    );
}

export default App;
