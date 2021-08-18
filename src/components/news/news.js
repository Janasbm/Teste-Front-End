import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

import api from '../../services/api';

export default function News() {
  const [created, setCreated] = useState(() => {
    return false;
  })
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const request = {
      name: data.name,
      email: data.email,
    }
    api
      .post('/newsletter',request)
      .then((response) => setCreated(true))
      .catch((error) => console.error(error));
  };
  function newEmail () {setCreated(false)};
  return (
    <section>
      {created ? <div className="news">
        <h3 className="cadastro">Seu e-mail foi cadastrado com sucesso!</h3>
        <p className="mensagem">A partir de agora você receberá as novidade e ofertas exclusivas.</p>
        <button className="btn" onClick={newEmail}>Cadastrar novo e-mail</button>
      </div>

      : <div className="news">
        <p>Participe de nossas news com promoções e novidades!</p>
        <form onSubmit = { handleSubmit(onSubmit) } >
          <input placeholder="Digite seu nome" {...register("name", { required: true })} />
          <input placeholder="Digite seu email" type="email" {...register("email", { required: true })}/>
          <button className="submit" type="submit">Eu quero!</button>
        </form>
      </div>}
    </section>
  )
}

