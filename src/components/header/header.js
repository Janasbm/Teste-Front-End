import React from 'react';
import './style.css';

import logo  from '../../assets/images/logo.svg';
import user  from '../../assets/images/user.svg';
import shopping from '../../assets/images/shopping.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <form className="busca">
            <input className="busca-input" type="text" placeholder="O que está procurando?" />
          </form>
        </div>

        <div className="user">
          <img src={user} alt="user" />
          <p>Minha Conta</p>
        </div>

        <div className="shopping">
          <img src={shopping} alt="shopping" />
        </div>
      </div>
    </header>
  )
}

export default Header;