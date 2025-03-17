import { useState } from "react";
import { Instagram } from "lucide-react";

const CardComponent = ({
  title,
  description,
  cash,
  barterWorth,
  logo,
  heroImage,
  hired,
  slotsAvailable,
  buttonText,
  socialLinkText,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const progress = (hired / slotsAvailable) * 100;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="overflow-hidden shadow-lg border rounded-xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="bg-gradient-to-r from-teal-500 to-green-400 p-4 h-52 flex justify-between items-center rounded-t-xl">
            <div className="text-white space-y-2 max-w-[50%]">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-xs font-medium">{description}</p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={heroImage || "/placeholder.svg"}
                alt={title}
                className="h-40 object-contain"
              />
            </div>
          </div>

          {logo && (
            <div className="absolute bottom-3 left-4">
              <div className="bg-white rounded-full p-2 w-14 h-14 flex items-center justify-center shadow-md">
                <img src={logo} alt="Logo" className="h-8 w-8" />
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 pb-3 px-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <button
              className={`px-3 py-1.5 rounded-md text-white text-sm font-medium ${
                isHovered ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              {buttonText}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <p className="text-gray-500 text-xs">Cash</p>
              <p className="text-lg font-bold">{cash}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Barter Worth</p>
              <p className="text-lg font-bold">{barterWorth}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-500">
              {hired}/{slotsAvailable} Hired
            </p>
          </div>
        </div>

        <div className="border-t py-2 px-4 flex justify-between">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
            <Instagram className="h-4 w-4" />
            <span>{socialLinkText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
