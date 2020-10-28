import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';

import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({ email: '' });

  const handleInput = (event) => {
    setValues({
      ...form,
      // valor [] dinamico, representa cada valor de name del formulario
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleRequest = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/'); //para moverte a una ruta de acuerdo al comportamiento en la app
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' onClick={handleRequest}>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src='../assets/google-icon.png' alt='' />
            Inicia sesión con Google
          </div>
          <div>
            <img src='../assets/twitter-icon.png' alt='' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
