import Card from "./Card";
import CartOrderForm from "./CartOrderForm";
import Header from "./Header";
import { UseCounter } from "./UseCounter";
import React from "react";

export default function CartSection() {
  const { cartList } = UseCounter();
  const [checkOutBtn, setCheckOutBtn] = React.useState(false);

  return (
    <>
      <Header />
      {checkOutBtn && (
        <CartOrderForm cartList={cartList} setCheckOutBtn={setCheckOutBtn} />
      )}
      <div
        className={`cartContainer relative flex flex-col gap-6 p-6 pt-[100px] bg-gray-100 min-h-screen ${
          checkOutBtn && "blur-sm"
        }`}
        onClick={() => {
          if (checkOutBtn) {
            setCheckOutBtn(false);
          }
        }}
      >
        {cartList.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-32 h-32 opacity-70"
            />
            <strong className="text-lg text-gray-700 mt-4">
              Your Cart is Empty
            </strong>
          </div>
        ) : (
          <div className="container bg-white shadow-lg rounded-xl p-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center w-full gap-6">
            {cartList.map((cur, k) => (
              <Card
                key={k}
                pic={cur.pic}
                title={cur.title}
                id={cur.id}
                price={cur.price}
                description={cur.description}
                catagory={cur.catagory}
              />
            ))}
          </div>
        )}
        {cartList.length > 0 && (
          <button
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-md text-white font-semibold hover:scale-105 transition-all duration-300 self-center mt-6"
            onClick={() => setCheckOutBtn(true)}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </>
  );
}
