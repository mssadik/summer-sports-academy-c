
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'

const useInstructorCart = () => {
    const {user, loading} = useContext(AuthContext);
    // console.log('user',user?.email);
    // console.log(loading);

    const { refetch, data: instructorCart = [] } = useQuery({
        queryKey: ['instructorCart', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/instructorCart?email=${user?.email}`)
            return res.json();
        },
    })

    return [instructorCart, refetch]

}
export default useInstructorCart;