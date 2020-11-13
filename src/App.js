import React from 'react';
import './App.css';
import './Props.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../src/components/Header'
import HomePage from '../src/components/Home'
import Footer from '../src/components/Footer'
import Signin from './components/Signin'
import Sell from './components/Sell'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/account/signin" component={Signin} />
        <Route path="/account/sell" component={Sell} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
