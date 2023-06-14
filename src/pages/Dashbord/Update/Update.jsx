import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
    const { user } = useContext(AuthContext);
    const classe = useLoaderData();
    const { _id, } = classe
    const navigate = useNavigate();

    const handelUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const class_name = form.className.value;
        const class_img = form.classImage.value;
        const instructor_name = form.instructorName.value;
        const instructor_email = form.instructorEmail.value;
        const available_seats = form.availableSeats.value;
        const price = form.price.value;
        const status = form.status.value;
        const item = { class_name, class_img, instructor_name, instructor_email, available_seats, price, status }
        console.log(item);

        if (user && user?.email) {
            const classItem = { userEmail: user?.email, class_name, class_img, instructor_name, instructor_email, available_seats, price, status }
            fetch(`http://localhost:5000/classes/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

    }
    return (
        <div style={{borderTopLeftRadius: "200px", borderBottomRightRadius: "200px",}}  className="bg-yellow-950  text-white w-9/12 ml-20 p-10">
            <h2 className="mb-10 text-3xl font-bold ml-10">Update A Class {classe.class_name}</h2>
            <form onSubmit={handelUpdate} className="space-y-6">
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label htmlFor="className" className="text-white">Class Name</label><br />
                        <input className="text-black w-full rounded" type="text" name="className" defaultValue={classe.class_name} placeholder="Class Name" required /><br /><br />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="classImage" className="text-white">Class Image</label><br />
                        <input className="text-black w-full rounded" type="text" name="classImage" defaultValue={classe.class_img} placeholder="Class Image" required />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label htmlFor="instructorName" className="text-white">Instructor name</label><br />
                        <input className="text-black w-full rounded" type="text" name="instructorName" defaultValue={user?.displayName} /><br /><br />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="instructorEmail" className="text-white">Instructor email</label><br />
                        <input className="text-black w-full rounded" type="text" name="instructorEmail" defaultValue={user?.email} />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label htmlFor="availableSeats" className="text-white">Available seats</label><br />
                        <input className="text-black w-full rounded" type="text" name="availableSeats" defaultValue={classe.available_seats} placeholder="Available Seats" required /><br /><br />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="price" className="text-white">Price</label><br />
                        <input className="text-black w-full rounded" type="text" name="price" defaultValue={classe.price} placeholder="Price" required />
                    </div>
                </div>
                <div className="flex mb-5">
                    <input className="text-black w-full rounded" name="status" type="text" defaultValue="pending" required />
                </div>
                <button className="btn btn-primary">Update</button>
            </form>
        </div>

    );
};

export default Update;