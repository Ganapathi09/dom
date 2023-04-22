
import './App.css';
import React from 'react';
import Navigation from './component/Navigation';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact'
import Tourism from './Routes/Toursim'
import {Routes,Route,BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className='App'>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Navigation />}></Route>
    <Route exact path='/home' element={<Home />}></Route>
    <Route exact path='/about' element={<About />}></Route>
    <Route exact path='/contact' element={<Contact />}></Route>
    <Route exact path='/tourism' element={<Tourism />}></Route>
  </Routes>
  </BrowserRouter>
      
   
    </div>
  );
}



export default App;
