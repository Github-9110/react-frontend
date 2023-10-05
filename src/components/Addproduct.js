import React, { useState} from "react";
import {useNavigate} from "react-router-dom"; // use for rediract
const Addproduct = () => {
    const [name, setName] = useState("");
    const [ price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();



    const collectData = async () => {

    if(!name || !price || !brand || !category) {
        setError(true);
        return false;
    }
        /* APIs Integrate With Node to Save MongoDB */
        const userid = JSON.parse(localStorage.getItem('user'))._id; // This is used for get single value from save to application near console.
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, brand,category,userid}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result)); // inApplication inspect element
        if(result) {
            navigate('/add');
        }
    }
    return (
        <div className="div-sign">
            <h1>Add Products</h1>
            <div className="xyz">
                <input type="text" className="inputField" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
                  { error && !name && <span className="productError">Enter Valid Name</span> }

                <input type="text" className="inputField" value={price}
                    onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />

                    { error && !price && <span className="productError">Enter Valid Price</span> }
                    

                <input type="text" className="inputField" value={brand}
                    onChange={(e) => setBrand(e.target.value)} placeholder="Enter Brand" />

                    { error && !brand && <span className="productError">Enter Valid Brand</span> }

                <input type="text" className="inputField" value={category}
                    onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />

                    { error && !category && <span className="productError">Enter Valid Category</span> }
            </div>
            <div>
            <button onClick={collectData} type="button" class="appButton">Save Product</button>
            </div>
        </div>
    );
}
export default Addproduct;