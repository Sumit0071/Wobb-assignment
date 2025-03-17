const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto animate-pulse">
      <div className="overflow-hidden shadow-lg border rounded-xl bg-white">
        <div className="relative">
          <div className="bg-gray-300 p-4 h-52 flex justify-between items-center rounded-t-xl">
            <div className="space-y-2 max-w-[50%]">
              <div className="h-6 w-24 bg-gray-400 rounded"></div>
              <div className="h-4 w-32 bg-gray-400 rounded"></div>
            </div>
            <div className="flex-shrink-0">
              <div className="h-40 w-24 bg-gray-400 rounded"></div>
            </div>
          </div>
          <div className="absolute bottom-3 left-4">
            <div className="bg-white rounded-full p-2 w-14 h-14 flex items-center justify-center shadow-md">
              <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-3 px-4">
          <div className="flex justify-between items-start mb-4">
            <div className="h-6 w-36 bg-gray-400 rounded"></div>
            <div className="h-8 w-20 bg-gray-400 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <div className="h-4 w-12 bg-gray-400 rounded mb-1"></div>
              <div className="h-6 w-24 bg-gray-400 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-20 bg-gray-400 rounded mb-1"></div>
              <div className="h-6 w-24 bg-gray-400 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-400 h-2 rounded-full w-1/2"></div>
            </div>
            <div className="h-4 w-24 bg-gray-400 rounded self-end"></div>
          </div>
        </div>
        <div className="border-t py-2 px-4 flex justify-between">
          <div className="h-6 w-24 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
