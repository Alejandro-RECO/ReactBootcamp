// src/features/cart/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCard } from './cartSlice';

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}