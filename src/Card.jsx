import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Card({pic, title, id, price, description, catagory}){
    return(
      <Link className='card flex flex-col border border-yellow-600 justify-between h-full w-full max-w-[300px] bg-[#F9F9F9] rounded-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer' to= "/BuyPage" state={{pic, title, id, price, description, catagory}}> 
      
        <div 
            className="pic w-full h-40 bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${pic})` }}
            ></div>
    
       <div className="content flex flex-col p-3 h-[calc(100%-160px)]">
         <p className='text-[#444444] line-clamp-2'>{title}</p>
         <div className="wrap flex flex-col mt-auto">
         <strong className="text-yellow-600 mt-2">Rs.{price}</strong>
          <strike className= "text-xs">Rs. {price*2}</strike>
          </div>
       </div>
       </Link>
      

    )
}

Card.propTypes = {
  pic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired
};
