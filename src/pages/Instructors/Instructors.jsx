import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState(null);
    useEffect(() =>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data));
    }, [])
    return (
        <div className="my-5">
            <img className="w-full" src="https://i.ibb.co/XpLGT2K/ic.jpg" alt="" />
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-md my-10">Meet Our All Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    instructors?.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;