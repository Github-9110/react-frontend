import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Productslist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    }
    console.warn(products);
    return (
        <div className="product-list">
            <h1>Productslist</h1>
            <ul className="heading">
              <li>SR No.</li>
              <li>Name</li>
              <li>Price</li>
              <li>Brand</li>
              <li>Category</li>
            </ul>

            {
            products.map((item,index)=>
            <ul>
              <li>{index+1}</li>
              <li>{item.name}</li>
              <li>Rs. {item.price}</li>
              <li>{item.brand}</li>
              <li>{item.category}</li>
              <li>
                <Link to={"/"} className="Delete">Delete</Link>
                <Link to={"/update/"+item._id} className="operation">Update</Link>
              </li>
            </ul>
            )
            }
            

        </div>
    );
}
export default Productslist;