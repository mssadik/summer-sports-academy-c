import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {

    const {data: classes = [], refetch} = useQuery(['classes'], async() =>{
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })

    return (
        <div>
            <h2 className='text-white text-3xl font-bold text-center mb-5'>Manage Classes{classes.length}</h2>
        </div>
    );
};

export default ManageClasses;