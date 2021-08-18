import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './style.css';

const Prateleira = () => { /*Usando o useState para guardar os dados da API */
  const [data,setData]=useState(() => {
    return [];
  });
  useEffect(() => { /*Chamada para API */
    api
      .get('/products')
      .then(response => setData(response.data)) /* O then trata da resposta com sucesso 200 */
      .catch(error => console.error(error)); /*Já o catch é quando a resposta é com erro */
  }) 
  return (
    <main>
      <div className="prateleira">
        <h3>Mais vendidos</h3>
        <div className="produtos">
          {/*Loop para exibir os dados retornados da API */
            data.map(product => {
              return (
                <div>
                  <img src={product.imageUrl} alt={product.productName} />
                  <p>{product.productName}</p>
                  <p className="valor">{product.listPrice ? "de R$ "+(product.listPrice/100).toFixed(2).replace('.',','):'' }</p> {/*if ternário para verificar se  foi enviado o valor do listPrice*/ }
                  <h3>por R$ {(product.price/100).toFixed(2).replace('.',',')}</h3> {/* Trabalhando com valores e deixando com duas casas decimais
                  substituindo "." por "," */} 
                  <p className="valor">{product.installments.length > 0 ? "ou em "+ product.installments[0].quantity+"x de R$ "+ (product.installments[0].value/100).toFixed(2).replace('.',','):""}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Prateleira;