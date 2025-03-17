import { useState, useContext } from "react";
import { ThemeContext } from "../Theme"; // Ensure correct path!
import { Sun, Moon, Menu, X, Bell } from "lucide-react";

const Navbar = () => {
    const { theme, toggleTheme } = useContext( ThemeContext );
    const [isOpen, setIsOpen] = useState( false );
    const [numberOfNotifications, setNumberOfNotifications] = useState( 3 );

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 shadow-md top-0 start-0 border-b ">
            <div className="max-w-screen-xl h-[80px] flex items-center justify-between mx-auto p-4">
                {/* Left Section: Logo */}
                <div className="flex items-center justify-start">
                    <a href="https://www.wobb.ai/">
                        <img
                            src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6716c18e45760446b740a3b6_logo%20final%20one%205.png"
                            alt="wobb logo"
                            className="w-[33px] h-[33px] cursor-pointer mr-2"
                        />
                    </a>
                    <h2 className="font-bold text-gray-600 dark:text-white">Wobb.AI</h2>
                </div>

                {/* Center Section: Menu (Hidden on Mobile) */}
                <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-white font-medium">
                    <li className="cursor-pointer  hover:text-blue-500 transition font-medium">Home</li>
                    <li className="cursor-pointer  hover:text-blue-500 transition font-medium">About</li>
                    <li className="cursor-pointer  hover:text-blue-500 transition font-medium">Service</li>

                </ul>

                {/* Right Section: Theme Toggle & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    ><div className="w-8 h-8 flex items-center justify-center rounded-full">
                            {theme === "light-theme" ? <Moon size={18} color="black" /> : <Sun size={18} color="yellow" strokeWidth={3} />}
                        </div>
                    </button>
                    {/* notification bell */}

                    <div className="relative group">
                        <Bell className="h-[24px] w-[24px] cursor-pointer" />
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                           {numberOfNotifications} Notifications
                        </span>
                        {numberOfNotifications > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {numberOfNotifications}
                            </span>
                        )}
                    </div>
                    <div className="relative group flex items-center gap-2">
                        <img alt="avatar" src="src/assets/avatar.jpeg" className="h-[40px] w-[40px] rounded-full cursor-pointer"/>
                Hi Sumit
                    </div>

                    {/* Hamburger Menu (Mobile Only) */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen( !isOpen )}
                    >
                        {isOpen ? <X size={20} color="gray" /> : <Menu size={20} color="gray" />}
                    </button>
                </div>
            </div>

            {/* Sidebar (Mobile Menu) */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden 
                ${theme === "light-theme" ? "bg-white text-gray-700" : "bg-gray-900 text-white"}`}
            >
                <div className="flex flex-col items-center py-8 space-y-6 font-medium">
                    <button
                        className="absolute top-5 right-5"
                        onClick={() => setIsOpen( false )}
                    >
                        <X size={15} color="gray" />
                    </button>
                    <a href="/" className="text-lg font-bold  hover:text-blue-500">Home</a>
                    <a href="/" className="text-lg font-bold  hover:text-blue-500">About</a>
                    <a href='/' className="text-lg font-bold  hover:text-blue-500">Service</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
