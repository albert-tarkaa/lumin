import React from 'react';
import { ReactComponent as Logo } from '../assets/lumin.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';

const Header = () => {
  return (
    <>
      <div class='navbar'>
        <div className='nav-items'>
          <Logo className='logo-container' />
          <a>Shop</a>
          <a>About</a>
          <a>Support</a>
          <a href='https://store.luminskin.com/blog'>Blog</a>
        </div>
        <div className='nav-items'>
          <a>Account</a>
          <CartIcon className='shopping-icon' />
          <span className='item-count'>15</span>
        </div>
      </div>
    </>
  );
};

export default Header;
