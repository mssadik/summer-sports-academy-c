// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// // useInstructor

// const useInstructor = () =>{
//     const {user} = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     // console.log(axiosSecure);
//     const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
//         queryKey: ['isInstructor', user?.email],
//         queryFn: async () =>{
//             const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//             // console.log('is instructor response', res);
//             return res.data.instructor;
//         }
//     })
//     return [isInstructor, isInstructorLoading]
// }
// export default useInstructor;







import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

// useInstructor

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`);
      const data = await res.json();
      return data.instructor;
    }
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
