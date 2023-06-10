import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
    const { user } = useContext(AuthContext);
    const classe = useLoaderData();
    console.log(classe);
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
        
        if(user && user?.email){
            const classItem = { userEmail: user?.email, class_name, class_img, instructor_name, instructor_email, available_seats, price, status}
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
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
        else{
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
        <div className="text-white w-full ml-20">
            <h2 className="mb-10 text-3xl">Upadte A Class</h2>
            <form onSubmit={handelUpdate}>
                <div className="flex gap-5">
                    <div>
                        <label htmlFor="">Class Name</label><br />
                        <input className="text-black" type="text" name="className" placeholder="Class Name" required/><br /><br />
                    </div>
                    <div>
                        <label htmlFor="">Class Image</label><br />
                        <input className="text-black" type="text" name="classImage" placeholder="Class Image" required />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div>
                        <label htmlFor="">Instructor name </label><br />
                        <input className="text-black" type="text" name="instructorName" defaultValue={user?.displayName} /><br /><br />
                    </div>
                    <div>
                        <label htmlFor="">Instructor email</label><br />
                        <input className="text-black" type="text" name="instructorEmail" defaultValue={user?.email} />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div>
                        <label htmlFor="">Available seats </label><br />
                        <input className="text-black" type="text" name="availableSeats" placeholder="Available Seats" required/><br /><br />
                    </div>
                    <div>
                        <label htmlFor="">price</label><br />
                        <input className="text-black" type="text" name="price" placeholder="Price" required/>
                    </div>
                </div>
                <div className="flex mb-5">
                    <input className="text-black" name="status" type="text" defaultValue={"pending"} required />
                </div>
                <input className="btn btn-primary" type="Submit" />
            </form>
        </div>
    );
};

export default Update;