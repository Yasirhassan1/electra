import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const CounterContext = createContext(); // Create context

export const CounterProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // Centralized state

  return (
    <CounterContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CounterContext.Provider>
    )
};



// Custom Hook to Use Context
export const UseCounter = () => useContext(CounterContext);
CounterProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  