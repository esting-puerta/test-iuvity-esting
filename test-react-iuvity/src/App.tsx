import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
    return (
        <BrowserRouter>
            <div>
                <MainPage />
            </div>
        </BrowserRouter>
    );
}

export default App;


