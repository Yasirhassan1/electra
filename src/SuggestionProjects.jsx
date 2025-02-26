import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SuggestionProducts({pic, title, id, price, description, catagory}){
    return(
       <Link className='container flex flex-col border shadow-lg border-yellow-500 gap-2 bg-white min-w-[200px] max-w-[230px] rounded-sm p-2' to= "/BuyPage" state={{pic, title, id, price, description, catagory}}>
       <div className="pic w-full h-[100px] bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${pic})`}}></div>
       <p className='line-clamp-2'>{title}</p>
       <strong className='mt-auto text-yellow-600'>Rs. {price}</strong>
       </Link>
    )


}

SuggestionProducts.propTypes = {
     pic: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     id: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     description: PropTypes.string.isRequired,
     catagory: PropTypes.string.isRequired
}