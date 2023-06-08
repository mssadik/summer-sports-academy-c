
const PopularInstructorsCart = ({ popularInstructor }) => {
    const { name, img, email } = popularInstructor;
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={img} alt={name} className="popular-instructor-image rounded-full h-24 w-24 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-center">{name}</h2>
            <p className="text-gray-600 text-center mt-2"><span className="font-bold">Email:</span> {email}</p>
        </div>
    );
};

export default PopularInstructorsCart;