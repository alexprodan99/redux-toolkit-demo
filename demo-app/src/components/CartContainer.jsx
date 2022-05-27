import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '../features/cart/CartSlice';
import { openModal } from '../features/modal/ModalSlice';

import CartItem from './CartItem';


export default function CartContainer() {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector(state => state.cart);
    React.useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
                <div>
                    { cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
            </header>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total <span>{ total }</span></h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(openModal())}>Clear Cart</button>
            </footer>
        </section>
    )
}
