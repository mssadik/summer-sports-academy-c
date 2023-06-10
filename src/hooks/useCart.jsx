
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useCart = () => {
    const {user, loading} = useContext(AuthContext);
    // console.log('user',user?.email);
    // console.log(loading);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;


