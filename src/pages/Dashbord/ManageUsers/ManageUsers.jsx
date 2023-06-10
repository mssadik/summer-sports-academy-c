import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() =>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    return (
        <div>
            <h2 className='text-white text-3xl font-bold text-center mb-5'>Manage Classes{users.length}</h2>
        </div>
    );
};

export default ManageUsers;