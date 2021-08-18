import React from 'react';
import './style.css';

import line from '../../assets/images/line.jpg';
import contato from '../../assets/images/icon_contato.svg';
import faleOnline from '../../assets/images/icon_fale_online.svg';
import corebiz from '../../assets/images/logo_footer.svg';
import vtex from '../../assets/images/vtex_logo_footer.svg';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <h3>Localização</h3>
          <img className="line" src={line} alt="line" />
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>

        <div>
          <button>
            <img src={contato} alt="icon-contato"/>
            <span>ENTRE EM CONTATO</span>
          </button>
          <button>
            <img src={faleOnline} alt="icon-fale-online"/>
            <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
          </button>
        </div>

        <div className="developer">
          <div>
            <p>Created by</p>
            <img src={corebiz} alt="corebiz-logo-footer" />
          </div>

          <div>
            <p>Powered by</p>
            <img src={vtex} alt="vtex-logo-footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;