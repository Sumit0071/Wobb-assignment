import message from "../assets/message.jpeg";

const MessagePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                    Unread
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400">
                    Inbox
                </button>
            </div>
            <div className="flex flex-col items-center">
                <img src={message} alt="Message" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                <p className="mt-4 text-gray-600 text-lg">No messages in inbox</p>
            </div>
        </div>
    );
};

export default MessagePage;
