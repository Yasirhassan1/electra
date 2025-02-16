import React from "react"
import { useLocation } from "react-router-dom";
import items from "./data";
import SuggestionProducts from "./SuggestionProjects";
import Form from "./Form";
export default function BuyPage(){
    const location = useLocation();
    const { pic, title, id, price, description, catagory } = location.state || {}; // ✅ Get the passed data  
    let [quantity, setQuantity] = React.useState(1)
    let [buyNowBox, setBuyNowBox] = React.useState(false)
  
    
function decrementQuantity(){
    if(quantity>1){
     setQuantity((prev)=>prev-1)
    
    }
}

function incrementQuantity(){
     setQuantity((prev)=>prev+1)
    
}

return(
    <>
    {buyNowBox && <Form setBuyNowBox={setBuyNowBox} title={title} id={id} quantity={quantity} price={price}/> }
    <div className={`wrapper  relative flex transition-all duration-500 flex-col gap-4 p-4 pt-22 ${buyNowBox && "blur-xs"}`} onClick={()=>{if(buyNowBox){setBuyNowBox(false)}}}>
   <div className="container flex gap-8">
    <div className="pic w-full max-w-[400px] h-[300px] bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${pic})`}}></div>
    <div className="rightSide flex flex-col gap-4 self-center grow h-full ml-8">
        <h4>{title}</h4>
        <strong>Rs. {price}</strong>
        <strike className= "text-xs">Rs. {price*2}</strike>
        <div className="quantityBox flex gap-3 items-center w-fit">
       <p className="text-xs">Quantity</p>
       <div className="minus flex justify-center items-center w-12 h-12 bg-gray-300 rounded-full cursor-pointer" onClick={decrementQuantity}>-</div>
       <p>{quantity}</p>
       <div className="plus flex justify-center items-center h-12 w-12 bg-gray-300 rounded-full cursor-pointer" onClick={incrementQuantity}>+</div>
        </div>
        <div className="buyContainer flex gap-3 self-baseline">
            {/* <a href={googleFormLink} target="_blank"><button className="bg-green-400 px-8 py-3 transition-all duration-300 cursor-pointer rounded-md hover:scale-105 hover:bg-green-500" onClick={()=>setBuyNowBox(true)}>Buy Now</button></a> */}
            <button className="bg-green-400 px-8 py-3 transition-all duration-300 cursor-pointer rounded-md hover:scale-105 hover:bg-green-500" onClick={()=>setBuyNowBox(true)}>Buy Now</button>
            <button className="bg-amber-400 px-8 py-3 transition-all duration-300 cursor-pointer rounded-md hover:scale-105 hover:bg-amber-500">Add to cart</button>
        </div>
    </div>
   </div>
   <p>{description}</p>
   <h3 className="mt-12">Suggestion</h3>
   <div className="wrap flex gap-3 w-full px-4 mt-5 bg-[#e4e4e4] p-3 overflow-x-scroll">
   {items.map((cur)=>{
    if(catagory == cur.catagory){
    return <SuggestionProducts key={cur.id} pic={cur.pic} title={cur.title} id={cur.id} price = {cur.price} description = {cur.description} catagory = {cur.catagory}/>
    }
   })}
   </div>
   </div>
   </>
)
}


