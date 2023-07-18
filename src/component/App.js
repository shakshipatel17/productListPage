import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import ProductList from"./ProductList";

import Home from "./Home";

function App() {



  return (
  <Router>
    <div className = "ui container">
        <Header/>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product-list" element={<ProductList/>}/>
        </Routes>

    </div>
  </Router>
  );
}

export default App;
