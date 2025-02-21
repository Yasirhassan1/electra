import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <StateContext.Provider value={{ count, setCount }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
