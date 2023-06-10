import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const AddAClass = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const status = form.status.value;
        const item = { className, classImage, instructorName, instructorEmail, availableSeats, price, status }
        console.log(item);
        
        
    }

    return (
        <div className="text-white w-full ml-20">
            <h2 className="mb-10 text-3xl">Add A Class</h2>
            <form onSubmit={handelSubmit}>
                <div className="flex gap-5">
                    <div>
                        <label htmlFor="">Class Name</label><br />
                        <input className="text-black" type="text" name="className" placeholder="Class Name" /><br /><br />
                    </div>
                    <div>
                        <label htmlFor="">Class Image</label><br />
                        <input className="text-black" type="text" name="classImage" placeholder="Class Image" />
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
                        <input className="text-black" type="text" name="availableSeats" placeholder="Available Seats" /><br /><br />
                    </div>
                    <div>
                        <label htmlFor="">price</label><br />
                        <input className="text-black" type="text" name="price" placeholder="Price" />
                    </div>
                </div>
                <div className="flex mb-5">
                    <input className="text-black" name="status" type="text" defaultValue={"pending"} />
                </div>
                <input className="btn btn-primary" type="Submit" />
            </form>
        </div>
    );
};

export default AddAClass;