import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const CartColorChangeContext = createContext(); // Create context

export const CartColorChange = ({ children }) => {
  const [change, setChange] = useState(false); // Centralized state

  return (
    <CartColorChangeContext.Provider value={{ change, setChange }}>
      {children}
    </CartColorChangeContext.Provider>
    )
};



// Custom Hook to Use Context
export const UseChanger = () => useContext(CartColorChangeContext);
CartColorChange.propTypes = {
    children: PropTypes.node.isRequired,
  };
  