import React from "react";
import {Link} from "react-router-dom";

const Home =()=>{
    return (
        <div className = "ui menu">
            <div className= "ui container class center">
                <h1>Home</h1>
                <Link to="/product-list" className="ui button blue">Go to Products</Link>
            </div>
        </div>
    );
};
export default Home;