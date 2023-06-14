import { useContext, } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddAClass = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate();

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const class_name = form.className.value;
        const class_img = form.classImage.value;
        const instructor_name = form.instructorName.value;
        const instructor_email = form.instructorEmail.value;
        const available_seats = parseInt(form.availableSeats.value);
        const price = form.price.value;
        const status = form.status.value;
        const item = { class_name, class_img, instructor_name, instructor_email, available_seats, price, status }
        console.log(item);

        if (user && user?.email) {
            const classItem = { userEmail: user?.email, class_name, class_img, instructor_name, instructor_email, available_seats, price, status }
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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
        <div style={{borderTopLeftRadius: "200px", borderBottomRightRadius: "200px",}}  className=" text-white bg-yellow-500  w-9/12 ml-20 p-10">
            <h2 className="mb-10 text-3xl ml-8 font-bold text-stone-600">Add A Class</h2>
            <form onSubmit={handelSubmit} className="space-y-6">
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label htmlFor="className" className="text-white">Class Name</label><br />
                        <input className="text-black w-full rounded" type="text" name="className" id="className" placeholder="Class Name" required /><br /><br />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="classImage" className="text-white">Class Image</label><br />
                        <input className="text-black w-full rounded" type="text" name="classImage" id="classImage" placeholder="Class Image" required />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label htmlFor="instructorName" className="text-white">Instructor name</label><br />
                        <input className="text-black w-full rounded" type="text" name="instructorName" id="instructorName" defaultValue={user?.displayName} readOnly /><br /><br />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="instructorEmail" className="text-white">Instructor email</label><br />
                        <input className="text-black w-full rounded" type="text" name="instructorEmail" id="instructorEmail" defaultValue={user?.email} readOnly />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <label htmlFor="availableSeats" className="text-white">Available seats</label><br />
                        <input className="text-black w-full rounded" type="text" name="availableSeats" id="availableSeats" placeholder="Available Seats" required /><br /><br />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="price" className="text-white">Price</label><br />
                        <input className="text-black w-full rounded" type="text" name="price" id="price" placeholder="Price" required />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="status" className="text-white">Status</label><br />
                    <input className="text-black w-full rounded" name="status" id="status" type="text" defaultValue="pending" required />
                </div>
                <button className="btn btn-primary">Add A Class</button>
            </form>
        </div>

    );
};

export default AddAClass;