import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState('')
    const naviget = useNavigate();
    const {signUser, googleSignIn} = useContext(AuthContext);
    const handelSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = {email, password};
        // console.log(user);
        signUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            naviget('/')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(e =>{
            setError(e.message)
        })
    }
    const handelGoogleLogin = () =>{
        googleSignIn()
        .then(() =>{
            naviget('/')
        })
        .then(() =>{})
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full text-black  border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full text-black  border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox rounded text-blue-500" name="remember" />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Log in</button>
                </form>
                <div className="divider">OR</div>
                <div className="flex gap-1">
                    <div className="w-1/2 bg-lime-600 p-2 flex items-center justify-center text-white"><button onClick={handelGoogleLogin}><FaGoogle></FaGoogle> <span>Google</span></button></div>
                    <div className="w-1/2 bg-lime-600 p-2 flex items-center justify-center text-white"><button><FaGithub></FaGithub> <span>Github</span></button> </div>
                </div>
                <div className="text-center mt-4">
                <span className="text-gray-600">Don&apos;t have an account?<Link to="/register">Register</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;