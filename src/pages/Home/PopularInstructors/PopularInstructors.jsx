import { useEffect, useState } from "react";
import PopularInstructorsCart from "./PopularInstructorsCart";

const PopularInstructors = () => {
    const [instructors,setInstructors] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])

    const popularInstructors = instructors ? instructors.filter(instructor => instructor.popular === true) : [];

    return (
        <div className="my-20 mx-auto">
            <h2 className="text-4xl font-bold mb-10">Our Popular Instructors </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 ">
                {
                    popularInstructors.map(popularInstructor => <PopularInstructorsCart key={popularInstructor._id} popularInstructor={popularInstructor}></PopularInstructorsCart>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;