import { useEffect, useState } from "react";
import PopularCart from "./PopularCart";

const Popular = () => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, []);

    const popular = classes ? classes.filter(classItem => classItem.category === 'popular') : [];

    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                {
                    popular.map(classItem => (
                        <PopularCart key={classItem._id} classItem={classItem} />
                    ))
                }
            </div>
        </div>
    );
};

export default Popular;
