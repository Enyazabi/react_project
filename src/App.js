import React from 'react';
import './App.css';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import Home from './HomeComponent.jsx';
import CatalogComponent from './CatalogComponent.jsx';

function App() {

    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
            <CatalogComponent/>
        </div>
    );

}

export default App;
