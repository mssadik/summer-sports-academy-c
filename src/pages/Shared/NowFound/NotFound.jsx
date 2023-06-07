import { Link } from 'react-router-dom';
//TODO: dynamick
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">The requested page could not be found.</p>
      <Link className='btn btn-secondary mt-5' to="/">Go To Home</Link>
    </div>
  );
};

export default NotFound;
