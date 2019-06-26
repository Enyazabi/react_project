import React from 'react';
import './App.css';
import ButtonAppBar from './HeaderComponent.jsx';
import BottomAppBar from './FooterComponent.jsx';
import PaperSheet from './HomeComponent.jsx';

function App() {
    return (
        <div className="App">
            <ButtonAppBar/>
            <BottomAppBar/>
            <PaperSheet/>
        </div>
    );
}

export default App;
