import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./features/cart/CartSlice";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.modal);
  const { isLoading } = useSelector(state => state.cart);

  React.useEffect(() => {
    // returns a promise
    dispatch(getCartItems());
  },[]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
