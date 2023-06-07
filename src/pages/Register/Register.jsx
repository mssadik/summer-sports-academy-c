import { Link } from "react-router-dom";

const Register = () => {
    const handelSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confrom = form.confrom.value;
        const user = {name, photoURL, email, password, confrom}
        console.log(user);
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600"> Name</label>
                        <input type="name"  name="name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Photo</label>
                        <input type="text"  name="photoURL" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email </label>
                        <input type="email"  name="email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password"  name="password" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confrom" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password" name="confrom" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox rounded text-blue-500" name="remember" />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Register Now</button>
                </form>
                <div className="text-center mt-4">
                <span className="text-gray-600">Already have an account <Link to="/login">Login</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Register;