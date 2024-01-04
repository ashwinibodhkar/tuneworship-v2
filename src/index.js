import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Slider from './components/Slider';
import Artist from './components/Artist';
import MostPlayed from './components/MostPlayed';
import Advertise from './components/Advertise';
import Carosel from './components/carosel';
import BottomNav from './components/BottomNav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    
    <Carosel /> 
    <Slider />
    <div className="container mx-auto px-4">
    <Category />       
      <MostPlayed /> 
      <Artist /> 
      <Advertise /> 
       <BottomNav />
    </div>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
