import { Link } from "react-router-dom";
import logo from '../../../../public/all-imges/logo/logo.webp'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    // console.log(cart);
    // console.log('cart', cart)

    const handelLogOut = () => {
        logOut()
            .tehn(() => { })
            .catch(() => { })
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        
        <li><Link to="/instructors">Instructors</Link></li>


        {
            user ? <><li><Link onClick={handelLogOut} to="/">Log Out</Link> </li>         <li><Link to="/dashbord/myClasses"> Dashbord {/* <div className=" badge-secondary">{cart?.length || 0}</div> */} <span className="badge inl badge-secondary">+{cart?.length || 0}</span> </Link></li> <img className="w-10 rounded-full" src={user.photoURL} alt="" />  </> : <li><Link to="/login">Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-black opacity-80 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Summer Sports Academy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                
                <img className="w-[50px] rounded-lg" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;