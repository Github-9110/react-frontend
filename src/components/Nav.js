import react from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate(); /*This is hooks */
    const logout = () => {
        const empt = localStorage.clear();
        if (empt) {
            navigate('/SignUp');
        }
    }
    return (
        <div className='div-nav'>
        <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqByLtFXRKYGrsC6yjDQjV4BQm5vtdzJYsNQ&usqp=CAU' alt=''/>

            { 
            auth ? 
            <ul className='nav-ul'>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link onClick={logout} to="/SignUp">Logout ({JSON.parse(auth).name+'...!'})</Link></li>
            </ul>
            :
            <ul className='nav-ul text-right'>
                <li>{<Link to="/Login">Login</Link>}</li>
                <li>{<Link to="/SignUp">Sign Up</Link>}</li>
            </ul>
          };
        </div>
    );
}

export default Nav;