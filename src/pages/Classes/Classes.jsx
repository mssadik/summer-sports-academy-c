import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const Classes = () => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, []);

    return (
        <div>
            <img src="https://i.ibb.co/DrGpdkM/cc.jpg" alt="" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
                {
                    classes?.map(classItem => <ClassesCard key={classItem._id} classItem={classItem}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;
