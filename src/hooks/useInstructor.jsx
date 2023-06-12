import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

// useInstructor

const useInstructor = () =>{
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // console.log(axiosSecure);
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is instructor response', res);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;