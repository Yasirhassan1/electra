import PropTypes from 'prop-types';
import getBy from './getby';
import React from 'react';
export default function CartOrderForm({ cartList, setCheckOutBtn }) {
    let totalAmount = cartList.reduce((sum, cur) => sum + cur.price, 0);
     let [selectedItem, setSelectedItem] = React.useState('skardu')
    return (
        <form className="flex flex-col gap-4 mt-32 shadow-2xl left-[30%] absolute z-10 h-[400px] overflow-y-scroll scroll-smooth self-center rounded-lg p-6 w-full max-w-[400px] bg-white border border-gray-300" action="https://formspree.io/f/mqaedvoq" method="POST">
            <i className="fa-regular fa-circle-xmark self-end text-xl cursor-pointer text-gray-500 hover:text-gray-700" onClick={() => setCheckOutBtn(false)}></i>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Complete Your Order</h3>
            <div className="flex flex-col">
                <label className="font-semibold">Name *</label>
                <input className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" type="text" placeholder="Your answer" required name="Name" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Phone number *</label>
                <input className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" type="tel" placeholder="Your answer" required name="Phone no" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Email address *</label>
                <input className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" type="email" placeholder="Your answer" required name="Email address" />
            </div>

            <div className="wrap flex flex-col">
             <label className="text-gray-700 font-medium">City *</label>
            <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
            {/* <div className="flex flex-col">
                <label className="font-semibold">City *</label>
                <input className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" type="text" placeholder="Your answer" required name="City" />
            </div> */}
            <div className="flex flex-col">
                <label className="font-semibold">Billing address *</label>
                <input className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" type="text" placeholder="Your answer" required name="Billing address" />
            </div>
            
            <hr className='mt-3' />
            <strong className='self-center text-lg'>Order Details</strong>
            
            <div className="flex flex-col">
                <label className='font-semibold'>Products</label>
                <ul className='list-disc px-4 text-gray-700'>
                    {cartList.map((cur, k) => <li key={k}>{cur.title}</li>)}
                </ul>
                <input type="hidden" name="Product name" value={cartList.map(cur => cur.title).join(', ')} readOnly />
            </div>

            <input type="hidden" name="Product ID" value={cartList.map(cur => cur.id).join(', ')} readOnly />
            
            <div className="flex flex-col">
                <label className='font-semibold'>Total no of items</label>
                <p>{cartList.length}</p>
                <input type="hidden" name="Quantity" value={cartList.length} readOnly />
            </div>

            <div className="flex flex-col">
                <label className='font-semibold'>Total amount</label>
                <p>{totalAmount} PKR</p>
                <input type="hidden" name="Total Amount" value={`${totalAmount} PKR`} readOnly />
            </div>
            
            <div className="flex flex-col">
                <label className='font-semibold'>Payment method</label>
                <p>Cash on Delivery</p>
                <input type="hidden" name="Payment method" value="Cash on delivery" readOnly />
            </div>
            
            <div className="flex flex-col">
                <label className='font-semibold'>Get By</label>
                <p>{getBy(13)}</p>
                <input type="hidden" name="Get By" value={getBy(13)} readOnly />
            </div>
            
            <button className="px-6 py-3 bg-[#0073ff] text-white rounded-md mt-4 cursor-pointer transition-all duration-300 hover:scale-105" onClick={() => cartList.length = 0}>Order Now</button>
        </form>
    );
}

CartOrderForm.propTypes = {
    cartList: PropTypes.array.isRequired,
    setCheckOutBtn: PropTypes.func.isRequired,
};
