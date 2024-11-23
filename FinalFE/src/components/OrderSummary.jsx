import React from "react";

export default function OrderSummary({ data }) {
    
  const totalPrice = data.reduce((sum, item) => sum + item.price, 0);

  const totalItems = data.length;

  return (
    <div className="bg-gray-100 rounded-md p-4 h-max">
      <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
        Order Summary
      </h3>
      <div className="space-y-4 mt-4">
        {/* Total Items */}
        <div className="flex justify-between text-sm text-gray-800 font-semibold">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>
        {/* Total Price */}
        <div className="flex justify-between text-sm text-gray-800 font-semibold">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        {/* Shipping Fee */}
        <div className="flex justify-between text-sm text-gray-800 font-semibold">
          <span>Shipping Fee</span>
          <span>$5.00</span>
        </div>
        <hr className="border-gray-300" />
        {/* Grand Total */}
        <div className="flex justify-between text-base text-gray-900 font-bold">
          <span>Grand Total</span>
          <span>${(totalPrice + 5).toFixed(2)}</span>
        </div>
        {/* Checkout Button */}
        <button
          type="button"
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 rounded-md"
          onClick={() => alert("Proceed to Checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
