// simmerfoodcard.js
export default function MenuCardSkeleton() {
  return (
    <div className="space-y-4 container mx-auto p-4 border-b border-gray-200 animate-pulse">
      <div className="flex justify-between">
        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={`skeleton-item-${i}`} className="flex gap-4 p-3">
            <div className="flex-1 space-y-2">
              <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}