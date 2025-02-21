import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const WishListContext = createContext(); // Create context

export const WishProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={{ wishList, setWishList}}>
      {children}
    </WishListContext.Provider>
    )
};



// Custom Hook to Use Context
export const UseWish = () => useContext(WishListContext);
WishProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  