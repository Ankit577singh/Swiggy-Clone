import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { additems, Increment, Decrement } from '../Stores/slice';

export default function Menucardfood({ val }) {
  const items = useSelector((state)=>state.cartSlice.items);
  const data = val?.card?.info;
  const ele = items.find((ite)=>ite.id===data.id);
  const count = ele?ele.quantity:0;
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
 

  function handleAdd() {
    // setCount(1);
    dispatch(additems(data));
  }

  function handleIncrement() {
    // setCount((prev) => prev + 1);
    dispatch(Increment(data));
  }

  function handleDecrement() {
    // setCount((prev) => Math.max(prev - 1, 0));
    dispatch(Decrement(data));
  }

  return (
    <div className="flex flex-col justify-center md:flex-row p-4 border-b border-gray-200">
      {/* Left Section */}
      <div className="flex-1 pr-4">
        <div className="text-xs font-semibold text-gray-500 mb-1">
          <img
            className="h-5 w-5"
            src={
              val.card.info.isVeg
                ? 'https://www.pikpng.com/pngl/b/210-2108039_veg-logo-png-veg-symbol-clipart.png'
                : 'https://i.pinimg.com/736x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg'
            }
            alt={val.card.info.isVeg ? 'Veg' : 'Non-Veg'}
          />
        </div>
        <div className="text-lg font-bold text-gray-800">
          {val.card.info.name}
        </div>
        <div className="text-gray-700 font-medium">
          ₹{' '}
          {Math.floor(
            val.card.info.price
              ? val.card.info.price / 100
              : val.card.info.defaultPrice / 100
          )}
        </div>
        {val.card.info.ratings?.aggregatedRating?.rating && (
          <div className="flex items-center text-sm text-gray-600 pt-2">
            <span className="text-yellow-500 mr-1">★</span>
            {`${val.card.info.ratings.aggregatedRating.rating} (${val.card.info.ratings.aggregatedRating.ratingCountV2})`}
          </div>
        )}
        <div className="text-blue-500 text-sm cursor-pointer hover:underline pt-2.5">
          More Details
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <div className="relative">
          <img
            src={
              'https://media-assets.swiggy.com/swiggy/image/upload/' +
              val.card.info?.imageId
            }
            className="w-32 h-32 object-cover rounded-lg"
            alt={val.card.info.name}
          />
          {count === 0 ? (
            <button
              onClick={handleAdd}
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold py-1 px-4 rounded-md shadow-md hover:shadow-lg transition"
            >
              ADD
            </button>
          ) : (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded-md shadow-md px-2 py-1">
              <button
                onClick={handleDecrement}
                className="text-green-600 font-bold px-2"
              >
                −
              </button>
              <span className="font-semibold text-green-600">{count}</span>
              <button
                onClick={handleIncrement}
                className="text-green-600 font-bold px-2"
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center w-full">
          Customisable
        </div>
      </div>
    </div>
  );
}
