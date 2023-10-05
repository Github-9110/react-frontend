import React, { useEffect, useState} from "react";
import {useParams,useNavigate} from "react-router-dom"; // use for rediract
const Updateproduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async () =>{
        console.warn(params);

        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setBrand(result.brand)
        setCategory(result.category)
    }

    const updateProduct = async () => {
    console.warn(name, price, brand, category);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,
    {
        method: "put",
        body: JSON.stringify({ name, price, brand,category}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
        console.log(result);
        navigate('/');
    }
    return (
        <div className="div-sign">
            <h1>Update Products</h1>
            <div className="xyz">
                <input type="text" className="inputField" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />

                <input type="text" className="inputField" value={price}
                    onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
  

                <input type="text" className="inputField" value={brand}
                    onChange={(e) => setBrand(e.target.value)} placeholder="Enter Brand" />

                <input type="text" className="inputField" value={category}
                    onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />

                </div>
            <div>
            <button onClick={updateProduct} type="button" class="appButton">Update Product</button>
            </div>
        </div>
    );
}
export default Updateproduct;