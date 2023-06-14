import  { useState } from "react";

const ManageClassesRow = ({ classCard }) => {
//   console.log(classCard);
  const {
    class_img,
    class_name,
    instructor_name,
    instructor_email,
    available_seats,
    price,
  } = classCard;

  const [status, setStatus] = useState("pending");
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleApprove = () => {
    setStatus("approved");
    setIsButtonsDisabled(true);
  };

  const handleDeny = () => {
    setStatus("denied");
    setIsButtonsDisabled(true);
  };

  const handleSendFeedback = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFeedback("");
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    // Implement logic to send feedback to the instructor
    handleModalClose();
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={class_img}
          alt="Class Image"
        />
        <div>
          <h2 className="text-lg font-semibold">{class_name}</h2>
          <p className="text-sm">{instructor_name}</p>
          <p className="text-xs text-gray-600">{instructor_email}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <p className="text-sm font-semibold">Available Seats:</p>
          <p className="text-lg">{available_seats}</p>
        </div>
        <div className="mr-4">
          <p className="text-sm font-semibold">Price:</p>
          <p className="text-lg">{price}</p>
        </div>
        <div className="mr-4">
          <p className="text-sm font-semibold">Status:</p>
          <p className="text-lg">{status}</p>
        </div>
        <div className="flex">
          <button
            className="mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleApprove}
            disabled={isButtonsDisabled}
          >
            Approve
          </button>
          <button
            className="mr-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleDeny}
            disabled={isButtonsDisabled}
          >
            Deny
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleSendFeedback}
            disabled={isButtonsDisabled}
          >
            Send Feedback
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Send Feedback</h2>
            <form onSubmit={handleSubmitFeedback}>
              <textarea
                className="w-full h-24 border border-gray-300 p-2 mb-4"
                placeholder="Enter feedback..."
                value={feedback}
                onChange={handleFeedbackChange}
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClassesRow;
