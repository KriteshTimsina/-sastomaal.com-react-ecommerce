import "./navbar.css";
import { BsCart4 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar() {
    const { setSearch } = useGlobalContext();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const ref = useRef();
    // const navigate = useNavigate();
    // function handleRegister() {
    //     navigate('/login');
    // }

    return (

        <>
            <div className="navbar">
                <div className="nav__logo">
                    <h2 style={{ cursor: "pointer" }} className="logo">SastoMaal<span className="url">.com</span></h2>
                    <BsCart4 className="navbar__icon" /></div>
                <form className="nav__search" onSubmit={(e) => {
                    e.preventDefault();
                    setSearch(ref.current.value)
                }
                }>
                    <div className="search__bar">
                        <input ref={ref} className="search__input" type="text" placeholder="Search Products" />
                        <BiSearch className="search__icon" />
                    </div>
                </form>
                <div className="nav__items">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/category'}>Categories</Link>
                    <Link to={'/Order'}>Order</Link>
                    <Link to={'/Cart'}>Cart</Link>

                    {
                        isAuthenticated &&
                        <div className="user--details">
                            <img width={20} src={user.picture} alt={user.name} />
                            <p>{user.email}</p>
                        </div>
                    }
                    {
                        isAuthenticated ?
                            <input type="button" value='Logout' className="button buttons__navbar" onClick={() => logout({ returnTo: window.location.origin })} />
                            :
                            <input type="button" value='Login' className="button buttons__navbar" onClick={() => loginWithRedirect()} />

                    }

                </div>
            </div>
        </>
    )
}


  //  async function searchProducts(e){
  //    const productList = await ApiCallback(`https://dummyjson.com/products/search?q=${e.target.value}`);
  //   console.log(productList);
  //   setProducts(productList.products);
  //  }
//   value={query} onChange={(e) => setSearch(e.target.value)} 