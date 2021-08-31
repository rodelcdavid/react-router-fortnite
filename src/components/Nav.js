import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
   
        <div className="nav-container">

        <Link to="/" className ="links push">Logo</Link>
        <Link to="/" className ="links">Home</Link>
        <Link to="/about" className ="links">About</Link>
        <Link to="/shop" className ="links">Shop</Link>

        </div>
    )
}

export default Nav;