import React from 'react';
import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ShowData from './Components/ShowList';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowData/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
