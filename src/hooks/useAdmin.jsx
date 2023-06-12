// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const useAdmin = () =>{
//     const {user,} = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () =>{
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             // console.log('is admin response', res);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;










import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
      const data = await res.json();
      return data.admin;
    }
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
