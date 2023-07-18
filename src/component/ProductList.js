import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList =()=>{

     const [products, setProducts] = useState([]);
     const [productsSets, setProductsSets] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
     const [filter, setFilter] = useState(null);
     const [isList, setIsList] = useState(true);

     const fetchData = () => {
        axios.get("https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093")
              .then((res) => {
                console.log("data ---> "+JSON.stringify(res.data))
                setProducts(res.data)
                setIsLoading(false)
              })
     }

     const setOfTwoRows = () => {
        for(let i=0; i<products.data.length; i=i+2) {
            setProductsSets(productsSets => [...productsSets, [products.data[i],products.data[i+1]]])
        }

     }

     const viewHandler = (isTrue) => {
        if( !isTrue){
            setOfTwoRows();
        }
        setIsList(isTrue)
     }

     const filterHandler = (val) => {
        setFilter(val);
     };


     useEffect(() => {
            fetchData();
          }, [] )

    return(

        <div className="ui celled list">

            {console.log('productsSets --- '+JSON.stringify(productsSets))}
            {
                isLoading  ? 'Loading ...' :
                <div>
                  <h2>Product List Page</h2>
                  <input type="text" name ="search" placeholder="Search" onChange ={(event) => filterHandler(event.target.value)}/>
                    <br/><br/>

                     <button className="ui button blue" onClick={() => viewHandler(true)}>List</button>
                     <button className="ui button blue" onClick={() => viewHandler(false)}>Grid</button>

                  { isList ? products.data.map(p => <ProductCard product={p} filter={filter} />) :
                     productsSets.map((product)=> {
                             return <div>
                             <div style={{width: '50%', float:'left'}}><ProductCard product={product[0]} filter={filter} /></div>
                             <div style={{width: '50%', float:'right'}}><ProductCard product={product[1]} filter={filter} /></div>
                             </div>

                     })
                  }
                </div>
            }
            <br/>
            <br/>
            <Link to="/" className="ui button blue">Go to Home</Link>

        </div>
    );
};


export default ProductList;