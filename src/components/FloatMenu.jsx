import { Megaphone, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatMenu = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200 rounded-full px-6 py-3 flex gap-6 items-center justify-center cursor-pointer hover:border-blue-400">

            <div className="relative group flex flex-col items-center">
                <Megaphone className="text-gray-600 hover:text-blue-700 transition duration-300" size={24} onClick={() => navigate( '/' )} />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Campaigns
                </span>
            </div>


            <div className="relative group flex flex-col items-center">
                <MessageCircleMore className="text-gray-600 hover:text-blue-700 transition duration-300" size={24} onClick={() => { navigate( '/messages' ) }} />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Messages
                </span>
            </div>
        </div>
    );
};

export default FloatMenu;
