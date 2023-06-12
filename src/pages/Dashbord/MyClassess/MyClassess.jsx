import { Link } from "react-router-dom";
import useInstructorCart from "../../../hooks/useIsInstructorCart";

const MyClassess = () => {
    const [instructorCart] = useInstructorCart();


    return (
        <div className="text-white">
            <img className="mb-5" src="https://i.ibb.co/2gCmSH3/mc.jpg" alt="" />
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">All Class: {instructorCart.length}</h3>
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
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructorCart.map((item, index) => <tr
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
                            <td><Link to={`/dashbord/update/${item._id}`}><button className="btn btn-warning btn-sm">Update</button></Link></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyClassess;