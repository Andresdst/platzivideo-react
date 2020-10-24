import React from 'react';

import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />Recuérdame
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
        <a href='/'>Regístrate</a>
      </p>
    </section>
  </section>
);
export default Login;
