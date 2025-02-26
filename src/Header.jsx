import { Link } from 'react-router-dom';
import { UseChanger } from './CartColorChange';
import { UseCounter } from "./UseCounter";
import React from 'react';
export default function Header({ setSearch, setSearchItemm, selectedItem, setSelectedItem }) {
  const { change } = UseChanger();
  const { cartList } = UseCounter();
  let [isOpen, setIsOpen] = React.useState(false)

  function searchItem(formData) {
    let s = String(formData.get("searchItem"));
    setSearch(true);
    setSearchItemm(s.toLowerCase());
  }

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-700 border-b-2 transition-all duration-300 border-yellow-500 flex flex-col  justify-between gap-4 items-center p-4 md:px-8 fixed z-50 w-full shadow-lg">
      <div className="top flex gap-4 justify-between items-center w-full">
      <strong className='text-yellow-500 text-md md:text-2xl font-[Orbitron] tracking-widest'>Electra</strong>
      
      <div className="wrap flex gap-4 w-full justify-center items-center">
      <select
            className="text-black px-4 py-2 bg-white rounded-full outline-none shadow-lg border border-gray-300 hidden md:block"
            name="electronics"
            id="electronics"
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            <option value="all">All</option>
            <option value="laptop">💻 Laptops</option>
            <option value="headphone">🎧 Headphones</option>
            <option value="microphone">🎤 Microphones</option>
            <option value="printer">🖨️ Printers</option>
            <option value="speaker">🔊 Speakers</option>
            <option value="watch">⌚ Smart Watches</option>
          </select>
        <form className="relative w-full shadow-md md:w-1/2" action={searchItem}>
          <input
            className="h-11 px-4 w-full bg-gray-100 text-black rounded-full outline-none shadow-sm focus:ring-2 focus:ring-yellow-400"
            type="text"
            placeholder="Search products..."
            name="searchItem"
          />
          <button className="absolute right-1 top-1 cursor-pointer bg-yellow-500 rounded-full w-9 h-9 shadow-md hover:bg-yellow-600 transition-all">
            <i className="fa-solid fa-magnifying-glass text-white text-lg"></i>
          </button>
        </form>
      </div>
      <div className={`gap-6 items-center hidden md:flex`}>
        <Link className='relative flex flex-col items-center' to="/CartSection">
          {change && <span className='absolute z-10 -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>{cartList.length}</span>}
          <i className={`fa-solid fa-cart-shopping text-2xl  hover:text-yellow-500 transition-all duration-300 ${change ? "text-yellow-500" : "text-white"}`}></i>
        </Link>
        
        <Link to="/WishSection">
          <i className="fa-regular fa-bookmark text-2xl text-white hover:text-yellow-500 transition-all duration-300"></i>
        </Link>
      </div>
      <i className={`fa-solid ${isOpen? 'fa-xmark': 'fa-bars'} md:!hidden  text-2xl text-white`} onClick={()=>setIsOpen(!isOpen)}></i>
      </div>
      <div className={`bottom flex-col gap-3 ${isOpen? "flex": "hidden"}`}>
      <select
            className="text-black px-4 py-2 bg-white rounded-full outline-none shadow-lg border border-gray-300"
            name="electronics"
            id="electronics"
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            <option value="all">All</option>
            <option value="laptop">💻 Laptops</option>
            <option value="headphone">🎧 Headphones</option>
            <option value="microphone">🎤 Microphones</option>
            <option value="printer">🖨️ Printers</option>
            <option value="speaker">🔊 Speakers</option>
            <option value="watch">⌚ Smart Watches</option>
          </select>
      <div className={`flex justify-center gap-8 items-center mt-4`}>
        <Link className='flex flex-col items-center' to="/CartSection">
          {change && <span className='bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>{cartList.length}</span>}
          <i className={`fa-solid fa-cart-shopping text-3xl  hover:text-yellow-500 transition-all duration-300 ${change ? "text-yellow-500" : "text-white"}`}></i>
        </Link>
        
        <Link to="/WishSection">
          <i className="fa-regular fa-bookmark text-3xl text-white hover:text-yellow-500 transition-all duration-300"></i>
        </Link>
      </div>
      </div>
    </header>
  );
}

import PropTypes from 'prop-types';

Header.propTypes = {
    setSearch: PropTypes.string.isRequired,
    setSearchItemm: PropTypes.func.isRequired,
    selectedItem: PropTypes.string.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
    cardList: PropTypes.array.isRequired,
};