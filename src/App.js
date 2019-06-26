import React from 'react';
import './App.css';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import Home from './HomeComponent.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <BrowserRouter>



                <Header/>
                <Home/>
                <Footer/>
            </BrowserRouter>

        </div>
    );

}

export default App;
