import PropTypes from 'prop-types';
export default function Form({setBuyNowBox, title, id, quantity, price}){
    function getBy() {
        let futureDate = new Date(); // Create a new Date instance
        futureDate.setDate(futureDate.getDate() + 7); // Add 7 days safely
    
        let day = String(futureDate.getDate()).padStart(2, '0'); // Ensure 2-digit day
        let month = futureDate.toLocaleString('en-US', { month: 'short' }); // Short month name
        let year = futureDate.getFullYear(); // Get full year
    
        return `${day} - ${month} - ${year}`;
    }
   
   
    return(
        <form className="flex flex-col gap-4 mt-24 left-[40%] absolute z-10 h-[400px] overflow-y-scroll scroll-smooth self-center rounded-sm p-4 w-full max-w-[400px] bg-[#e4e4e4]" action="https://formspree.io/f/mqaedvoq" method="POST">
        <i className="fa-regular fa-circle-xmark self-end text-xl cursor-pointer" onClick={()=> setBuyNowBox(false)}></i>
        <div className="wrap flex flex-col">
        <label htmlFor="">Name *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="text" placeholder="Your answer" required name="Name" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Phone number *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="ph" placeholder="Your answer" required name="Phone no" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Email address *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="email" placeholder="Your answer" required name="Email address" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">City *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="text" placeholder="Your answer" required name="City" />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Billing address *</label>
        <input className="px-4 py-3 bg-white mt-2 outline-none rounded-sm" type="text" placeholder="Your answer" required name="Billing address" />
        </div>
        <hr className='mt-3' />
         <strong className='self-center'>Order Details</strong>
        <div className="wrap flex flex-col">
        <label htmlFor="">Product title *</label>
        <input className="px-4 py-3 bg-yellow-100 mt-2 outline-none rounded-sm" type="text" required name="Product name" value={title} readOnly />
        </div>
        <div className="wrap flex-col hidden">
        <label htmlFor="">Product ID *</label>
        <input className="px-4 py-3 bg-yellow-100 mt-2 outline-none rounded-sm" type="text" required name="product ID" value={id} readOnly />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Total no of items *</label>
        <input className="px-4 py-3 bg-yellow-100 mt-2 outline-none rounded-sm" type="text" required name="Quantity" value={quantity} readOnly />
        </div>
       
        <div className="wrap flex flex-col">
        <label htmlFor="">Total amount *</label>
        <input className="px-4 py-3 bg-yellow-100 mt-2 outline-none rounded-sm" type="text" required name="Total Amount" value={`${price*quantity} pkr`} readOnly />
        </div>
        <div className="wrap flex flex-col">
        <label htmlFor="">Payment method *</label>
        <input className="px-4 py-3 bg-yellow-100 mt-2 outline-none rounded-sm" type="text"  required name="Payment method" value={"Cash on delivery"} readOnly />
        </div>

        <div className="wrap flex flex-col">
        <label htmlFor="">Get By *</label>
        <input className="px-4 py-3 bg-yellow-100 mt-2 outline-none rounded-sm" type="text" required name="Get By" value={`${getBy()}`} readOnly />
        </div>

       
        
        <button className="px-4 py-3 bg-black rounded-sm text-white mt-4 cursor-pointer transition-all duration-300 hover:scale-105">Order Now</button>
        
    </form>
    )

}

Form.propTypes = {
    setBuyNowBox: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}