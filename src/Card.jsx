import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { UseWish } from "./UseWishList";

export default function Card({ pic, title, id, price, description, catagory }) {
  const { wishList, setWishList } = UseWish();
  const [heartClicked, setHeartClicked] = React.useState(false);

  useEffect(() => {
    const isInWishlist = wishList.some((item) => item.id === id);
    setHeartClicked(isInWishlist);
  }, [wishList, id]);

  function addToWishList() {
    if (!heartClicked) {
      setWishList([...wishList, { pic, title, id, price, description, catagory }]);
    } else {
      setWishList(wishList.filter((item) => item.id !== id));
    }
  }

  return (
    <Link
      className="card flex flex-col border border-yellow-500 justify-between h-full w-full max-w-[300px] bg-gradient-to-br from-[#f9f9f9] to-[#e0e0e0] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
      to="/BuyPage"
      state={{ pic, title, id, price, description, catagory }}
    >
      <div
        className="pic w-full h-40 bg-center bg-contain bg-no-repeat rounded-t-lg transform transition-transform duration-300 hover:scale-110"
        style={{ backgroundImage: `url(${pic})` }}
      ></div>

      <div className="content flex flex-col p-4 h-[calc(100%-160px)] text-gray-800">
        <p className="font-semibold text-lg line-clamp-2">{title}</p>
        <div className="wrap flex mt-auto justify-between items-center">
          <div className="cont flex flex-col">
            <strong className="text-yellow-600 text-lg">Rs. {price}</strong>
            <strike className="text-xs text-gray-500">Rs. {price * 2}</strike>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setHeartClicked((prev) => !prev);
              addToWishList();
            }}
            className="p-2 cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            {heartClicked ? (
              <i className="fa-solid fa-heart text-2xl text-red-500 transition-colors duration-300"></i>
            ) : (
              <i className="fa-regular fa-heart text-2xl text-gray-400 hover:text-red-500 transition-colors duration-300"></i>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  pic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired,
};
