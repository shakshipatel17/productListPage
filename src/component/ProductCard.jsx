import React from 'react';

const ProductCard =(props)=>{

   return(
    <div className="item">
           <div className="content" style={{border: '0.5px solid', padding:'10px', width: '15%'}}>
               <img src={(props.product.product_image)} height="100"/>
               <div><b>{props.product.product_title}</b></div>
               <div>
                   {
                        props.product.product_variants.map((variant,index)=>{
                        const text = variant['v'+(index+1)];
                        const i = text.indexOf('/')
                        const first = text.substring(0, i)
                        const second = text.substring(i+1)
                            return <p>
                            {first === (props.filter) || second === (props.filter)?<mark>{text}</mark> :text}
                            </p>;
                        })}
               </div>
           </div>
           <br/>
    </div>
   );
};

export default ProductCard;
