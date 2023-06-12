import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassesCard = ({ item }) => {
  const {
    class_name,
    class_img,
    instructor_name,
    instructor_email,
    available_seats,
    price,
  } = item;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = classItem => {
    if (user && user.email) {
      const cartItem = {
        clasId: classItem._id,
        userEmail: user.email,
        class_name,
        class_img,
        instructor_name,
        instructor_email,
        available_seats,
        price,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This class added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to book the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const cardStyle = {
    backgroundColor: available_seats === 0 ? "red" : "white",
  };

  return (
    <div className="rounded-lg shadow-lg p-4" style={cardStyle}>
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
        <p className="text-gray-600">
          <span className="font-bold">Instructor:</span> {instructor_name}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Available Seats:</span>{" "}
          {available_seats}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Price:</span>{" "}
          <span className="font-bold text-orange-500">${price}</span>
        </p>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handleAddToCart(item)}
          disabled={available_seats === 0}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
