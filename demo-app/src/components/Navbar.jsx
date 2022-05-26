import React from 'react'
import { CartIcon } from "../Icons";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { amount } = useSelector(state => state.cart);
  return (
    <nav>
        <div className="nav-center">
            <h3>Redux toolkit</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount"> { amount }</p>
                </div>
            </div>
            
        </div>
    </nav>
  )
}
