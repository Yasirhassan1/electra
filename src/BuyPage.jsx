import React from "react";
import { useLocation } from "react-router-dom";
import items from "./data";
import SuggestionProducts from "./SuggestionProjects";
import Form from "./Form";
import Header from "./Header";
import { UseCounter } from "./UseCounter";
import { UseChanger } from "./CartColorChange";

export default function BuyPage() {
    const location = useLocation();
    const { pic, title, id, price, description, catagory } = location.state || {};
    let [quantity, setQuantity] = React.useState(1);
    let [buyNowBox, setBuyNowBox] = React.useState(false);
    const { cartList, setCartList } = UseCounter();
    const { setChange } = UseChanger();

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    function incrementQuantity() {
        setQuantity((prev) => prev + 1);
    }

    function addToCart() {
        let found = cartList.some((cur) => cur.id === id);
        if (!found) {
            setCartList([...cartList, { pic, title, id, price, description, catagory }]);
            setChange(true);
        }
    }

    return (
        <>
            <Header />
            {buyNowBox && <Form setBuyNowBox={setBuyNowBox} title={title} id={id} quantity={quantity} price={price} />}
            <div className={`wrapper relative flex flex-col gap-6 p-6 pt-22 transition-all duration-500 ${buyNowBox && "blur-sm"}`} onClick={() => { if (buyNowBox) { setBuyNowBox(false); } }}>
                <div className="container flex flex-col md:flex-row gap-8 bg-white shadow-lg p-6 rounded-lg">
                    <div className="pic w-full md:max-w-[400px] h-[300px] bg-center bg-contain bg-no-repeat rounded-lg shadow-md" style={{ backgroundImage: `url(${pic})` }}></div>
                    <div className="rightSide flex flex-col gap-6 grow">
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <div>
                            <strong className="text-yellow-600 text-lg">Rs. {price}</strong>
                            <strike className="text-sm text-gray-500 ml-2">Rs. {price * 2}</strike>
                        </div>
                        <div className="quantityBox flex items-center gap-4">
                            <p className="text-sm font-medium">Quantity</p>
                            <button className="w-10 h-10 bg-gray-300 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-xl" onClick={decrementQuantity}>-</button>
                            <p className="text-lg font-semibold">{quantity}</p>
                            <button className="w-10 h-10 bg-gray-300 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-xl" onClick={incrementQuantity}>+</button>
                        </div>
                        <div className="buyContainer flex gap-4">
                            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-white font-semibold" onClick={() => setBuyNowBox(true)}>Buy Now</button>
                            <button className="bg-amber-400 hover:bg-amber-500 px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-white font-semibold" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{description}</p>
                <h3 className="mt-8 text-lg font-semibold">You May Also Like</h3>
                <div className="wrap flex gap-5 w-full p-4 bg-gray-200 rounded-lg overflow-x-auto">
                    {items.map((cur) => (
                        cur.catagory === catagory && <SuggestionProducts key={cur.id} pic={cur.pic} title={cur.title} id={cur.id} price={cur.price} description={cur.description} catagory={cur.catagory} />
                    ))}
                </div>
            </div>
        </>
    );
}
