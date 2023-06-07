import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../../public/all-imges/logo/logo.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-20 mb-20">
        <div className=" items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto rounded-lg ml-10 mb-3" />
          <p className="text-white ml-2" >Summer Sports Academy</p>
        </div>
        <div>
          <h2 className='text-white font-fold text-2xl mb-5'>Queck Links</h2>
          <div className="flex flex-col text-white ">
            <Link className='underline' to="/">Home</Link>
            <Link className='underline' to="/login">Login</Link>
            <Link className='underline' to="/register">Register</Link>
          </div>
        </div>
        <div className="flex space-x-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
      <hr className='w-[900px] mx-auto' />
      <div className="text-center mt-20">
        <p className="text-gray-400">© {new Date().getFullYear()} Summer Sports Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
