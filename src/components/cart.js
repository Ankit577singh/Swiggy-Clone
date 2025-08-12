import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../Stores/slice";
import MainHeader from "./mainheader";
import Footer from "./footer";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartSlice.items);

  const totalPrice = items.reduce(
    (total, item) => total + (item.price || item.defaultPrice) * item.quantity,
    0
  );

  return (
    <>
    <MainHeader></MainHeader>
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        🛒 Your Cart
        <span className="text-sm sm:text-base font-medium text-gray-500">
          ({items.length} items)
        </span>
      </h2>

      {items.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500 text-lg">
          Your cart is empty 😔
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-200"
            >
              {/* Left Section: Image + Info */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    item.imageId
                  }
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shadow"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ₹{Math.floor((item.price || item.defaultPrice) / 100)}
                  </p>
                </div>
              </div>

              {/* Right Section: Quantity + Price */}
              <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0">
                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(Decrement(item))}
                    className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold transition"
                  >
                    −
                  </button>
                  <span className="font-bold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(Increment(item))}
                    className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full hover:from-green-500 hover:to-green-600 text-lg font-bold shadow-md transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-lg mt-6 border-t">
            <span className="text-lg sm:text-xl font-bold text-gray-800">
              Total:
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-orange-500">
              ₹{Math.floor(totalPrice / 100)}
            </span>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-5 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
}
