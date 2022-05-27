import React from 'react';
import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../Icons';
import { removeItem, increase, decrease } from '../features/cart/CartSlice';

export default function CartItem({ id, img, title, price, amount, }) {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{ title }</h4>
            <h4 className="item-price">${price}</h4>
            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>Remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={() => dispatch(increase( { id }))}><ChevronUp /></button>
            <p style={{ textAlign: "center" }}> { amount }</p>
            <button className="amount-btn" onClick={() => {
                if (amount === 1) {
                    dispatch(removeItem(id));
                    return;
                }
                dispatch(decrease({ id }))
            }}><ChevronDown /></button>
        </div>
    </article>
  )
}
