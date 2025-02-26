import PropTypes from 'prop-types';
import getBy from './getby';
import React from 'react';
export default function Form({ setBuyNowBox, title, id, quantity, price }) {
  let [selectedItem, setSelectedItem] = React.useState("skardu")
    return (
        <form className="flex flex-col gap-6 mt-24 left-1/2 transform -translate-x-1/2 absolute z-10 h-auto max-h-[90vh] overflow-y-auto self-center rounded-lg p-6 w-full max-w-[450px] bg-white shadow-lg border" action="https://formspree.io/f/mqaedvoq" method="POST">
            <i className="fa-regular fa-circle-xmark self-end text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition" onClick={() => setBuyNowBox(false)}></i>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Complete Your Order</h3>
            
            <div className="wrap flex flex-col">
                <label className="text-gray-700 font-medium">Name *</label>
                <input className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400" type="text" placeholder="Your name" required name="Name" />
            </div>
            <div className="wrap flex flex-col">
                <label className="text-gray-700 font-medium">Phone Number *</label>
                <input className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400" type="tel" placeholder="Your phone number" required name="Phone no" />
            </div>
            <div className="wrap flex flex-col">
                <label className="text-gray-700 font-medium">Email Address *</label>
                <input className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400" type="email" placeholder="Your email" required name="Email address" />
            </div>


            {/* <div className="wrap flex flex-col">
                <label className="text-gray-700 font-medium">City *</label>
                <input className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400" type="text" placeholder="Your city" required name="City" />
            </div> */}
            <div className="wrap flex flex-col">
             <label className="text-gray-700 font-medium">City *</label>
            <select
            className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400"
            name="electronics"
            id="electronics"
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            >
            <option value="skardu">Skardu</option>
            <option value="rawalpindi">Rawalpindi</option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="gilgit">Gilgit</option>
            </select>
            </div>

            <div className="wrap flex-col hidden">
                <label className="text-gray-700 font-medium">City *</label>
                <input className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400" type="text" value={selectedItem} required name="City" readOnly />
            </div>
            <div className="wrap flex flex-col">
                <label className="text-gray-700 font-medium">Billing Address *</label>
                <input className="px-4 py-3 bg-gray-100 mt-2 outline-none rounded-md border focus:ring-2 focus:ring-gray-400" type="text" placeholder="Your billing address" required name="Billing address" />
            </div>
            
            <hr className='mt-4 border-gray-300' />
            <strong className='self-center text-gray-800 text-lg mt-4'>Order Details</strong>
            
            <div className="wrap flex flex-col mt-2">
                <label className='text-gray-700 font-semibold'>Product Title</label>
                <p className="text-gray-800">{title}</p>
                <input className="hidden" type="text" required name="Product name" value={title} readOnly />
            </div>
            
            <div className="wrap flex flex-col mt-2">
                <label className='text-gray-700 font-semibold'>Total No of Items</label>
                <p className="text-gray-800">{quantity}</p>
                <input className="hidden" type="text" required name="Quantity" value={quantity} readOnly />
            </div>
            <div className="wrap flex flex-col mt-2">
                <label className='text-gray-700 font-semibold'>Total Amount</label>
                <p className="text-gray-800">{price * quantity} PKR</p>
                <input className="hidden" type="text" required name="Total Amount" value={`${price * quantity} PKR`} readOnly />
            </div>
            <div className="wrap flex flex-col mt-2">
                <label className='text-gray-700 font-semibold'>Payment Method</label>
                <p className="text-gray-800">Cash on Delivery</p>
                <input className="hidden" type="text" required name="Payment method" value="Cash on Delivery" readOnly />
            </div>
            <div className="wrap flex flex-col mt-2">
                <label className='text-gray-700 font-semibold'>Get By</label>
                <p className="text-gray-800">{getBy(7)}</p>
                <input className="hidden" type="text" required name="Get By" value={getBy(7)} readOnly />
            </div>
            <div className="wrap flex-col hidden">
                <label>Product ID *</label>
                <input className="hidden" type="text" required name="product ID" value={id} readOnly />
            </div>
            
            <button className="px-5 py-3 bg-black text-white rounded-md text-lg mt-6 cursor-pointer transition-transform transform hover:scale-105">Order Now</button>
        </form>
    );
}

Form.propTypes = {
    setBuyNowBox: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};
