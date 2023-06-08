
const ClassesCard = ({ classItem }) => {
  const {
    class_name,
    class_img,
    instructor_name,
    instructor_email,
    available_seats,
    price,
  } = classItem;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="relative">
        <img
          src={class_img}
          alt={class_name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 px-4 rounded-b-lg">
          <h2 className="text-xl font-bold text-white">{class_name}</h2>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Instructor: {instructor_name}</p>
        <p className="text-gray-600">Email: {instructor_email}</p>
        <p className="text-gray-600">Available Seats: {available_seats}</p>
        <p className="text-gray-600">Price: {price}</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;