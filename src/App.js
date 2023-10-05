import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Productslist from './components/Productslist';
import UpdateProduct from './components/UpdateProduct'; /* UpdateProduct Use it as URL link below. */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

       <Route element={<PrivateComponent/>}> 
       {/* To make it private  */}
        <Route path ="/" element={<Productslist/>}></Route>
        <Route path ="/add" element={<Addproduct/>}></Route>
        <Route path ="/update/:id" element={<UpdateProduct/>}></Route>
        <Route path ="/logout" element={<h1>Logout Page</h1>}></Route>
        <Route path ="/profile" element={<h1>Profile Page</h1>}></Route>
        </Route>
        <Route path ="/SignUp" element={<SignUp/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
      
      <Footer/>
      </div>
  );
}

export default App;
