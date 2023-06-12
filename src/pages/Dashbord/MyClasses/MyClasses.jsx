import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {

    

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    const handelPrice = (price) =>{
        localStorage.setItem("price", price)
    }

    return (
        <div className="text-white">
            <img className="mb-5" src="https://i.ibb.co/2gCmSH3/mc.jpg" alt="" />
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">All Class: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
            </div>
            <table className="table w-full text-white">
                {/* head */}
                <thead className="text-white">
                    <tr>
                        <th>#</th>
                        <th>class img</th>
                        <th>class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Pameny</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.class_img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td> {item.class_name} </td>
                            <td> {item.instructor_name} </td>
                            <td> {item.instructor_email} </td>
                            <td> {item.available_seats} </td>
                            <td className="text-end">${item.price}</td>
                            <td><Link to="/dashbord/payment"><button onClick={()=>handelPrice(item.price)} className="btn btn-warning btn-sm ">PAY NOW</button></Link></td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;