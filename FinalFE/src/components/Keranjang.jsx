import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";

export default function Keranjang() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const isi = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const r = JSON.parse(localStorage.getItem(key));
      isi.push(r);
    }
    setData(isi);
  }, []); // okee ini untuk dependency-nya dikasih kosong

  return (
    <>
      {data.length > 0 ? (
        <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Shopping Cart
          </h1>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="md:col-span-2 space-y-4">
              {data?.map((item) => (
                <>
                  <hr className="border-gray-300" />
                  <div className="grid grid-cols-3 items-start gap-4" key={item.id}>
                    <div className="col-span-2 flex items-start gap-4">
                      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                        <img
                          src={item.image}
                          className="w-full h-full object-contain"
                          alt={item.title}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-gray-800 text-left">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-gray-500 mt-0.5 text-left">
                          Category : {item.category}
                        </p>
                        <button
                          type="button"
                          className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                          onClick={() => {
                            localStorage.removeItem(item.id);
                            setData(data.filter((d) => d.id !== item.id));
                          }}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                        {item.price}$
                      </h4>
                    </div>
                  </div>
                  <hr className="border-gray-300" />
                </>
              ))}
              <hr className="border-gray-300" />
            </div>
            <div className="bg-gray-100 rounded-md p-4 h-max">
              
              <OrderSummary data={data}/>
              {/* Order Summary implementation */}
            </div>
          </div>
        </div>
      ) : (
        <></>
)}
    </>
  );
}
