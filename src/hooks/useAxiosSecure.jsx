// import { useContext, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:5000', 
// });

// const useAxiosSecure = () => {
//   const { logOut } = useContext(AuthContext);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem('access-token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//           await logOut();
//           navigate('/login');
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [logOut, navigate]);

//   return [axiosSecure];
// };

// export default useAxiosSecure;





// import { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';

// const useFetchSecure = () => {
//   const { logOut } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const fetchSecure = async (url, options) => {
//     const token = localStorage.getItem('access-token');
//     if (token) {
//       if (!options.headers) {
//         options.headers = {};
//       }
//       options.headers.Authorization = `Bearer ${token}`;
//     }

//     try {
//       const response = await fetch(url, options);

//       if (response.status === 401 || response.status === 403) {
//         await logOut();
//         navigate('/login');
//       }

//       return response;
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   };

//   useEffect(() => {
//     // Clean-up function for the effect (if needed)
//     return () => {
//       // Perform any clean-up actions here
//     };
//   }, []);

//   return [fetchSecure];
// };

// export default useFetchSecure;




// import React from 'react';
// import useFetchSecure from './useFetchSecure';

// const MyComponent = () => {
//   const [fetchSecure] = useFetchSecure();

//   const fetchData = async () => {
//     try {
//       const response = await fetchSecure('http://localhost:5000/api/data');
//       // Handle the response here
//     } catch (error) {
//       // Handle errors here
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
//     </div>
//   );
// };

// // export default MyComponent;
