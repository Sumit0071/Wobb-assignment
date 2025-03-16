import { useContext } from "react";
import { ThemeContext } from "../Theme"; // Ensure correct path!
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
    const { theme, toggleTheme } = useContext( ThemeContext );
    console.log( theme );

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl h-[60px] flex items-center justify-between mx-auto p-4">
                {/* Logo */}
                <div className="flex items-center justify-start w-full">
                    <a href="https://www.wobb.ai/">
                        <img
                            src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6716c18e45760446b740a3b6_logo%20final%20one%205.png"
                            alt="wobb logo"
                            className="w-[33px] h-[33px] cursor-pointer mr-2"
                        />
                    </a>
                    <h2 className="font-bold text-gray-800 dark:text-white">Wobb.AI</h2>

                </div>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        {theme === "light-theme" ? <Moon size={18} color="black" /> : <Sun size={18} color="yellow" strokeWidth={3} />}
                    </div>
                </button>


            </div>
        </nav>
    );
};

export default Navbar;
