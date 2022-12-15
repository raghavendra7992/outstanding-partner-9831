import React,{useReducer} from "react";
import reducer from "./reducer";


export const CartContext = React.createContext();

const initState = [];

const CartContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initState);

  return (
    <CartContext.Provider value={{state,dispatch}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;