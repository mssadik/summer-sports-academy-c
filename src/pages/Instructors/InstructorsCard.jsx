import  { useState } from 'react';

const InstructorsCard = ({ instructor }) => {
  const { name, img, email } = instructor;
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    setIsMessageOpen(true);
  };

  const handleCancelClick = () => {
    setIsMessageOpen(false);
    setMessageContent('');
  };

  const handleMessageChange = (event) => {
    setMessageContent(event.target.value);
  };

  const handleMessageSend = () => {
    // Logic to send the message
    console.log('Sending message:', messageContent);
    setIsMessageOpen(false);
    setMessageContent('');
  };

  return (
    <div className="bg-white text-center rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600"><span className='font-bold'>Email: </span>{email}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ${
            isFollowing ? 'bg-green-500' : ''
          }`}
          onClick={handleFollowClick}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={handleMessageClick}
        >
          Message
        </button>
      </div>

      {isMessageOpen && (
        <div className="mt-4">
          <textarea
            className="w-full text-black rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type your message..."
            value={messageContent}
            onChange={handleMessageChange}
          ></textarea>
          <div className="flex justify-end mt-2 space-x-2">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              onClick={handleMessageSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorsCard;
