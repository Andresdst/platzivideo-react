import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import Header from '../components/Header';

import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = () => {
    setValues({
      ...form,
      [event.target.name]: event.target.value, //seteo de valores dinamicos
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/'); //para moverte a una ruta de acuerdo al comportamiento en la app
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input className='input' type='text' name='name' placeholder='Nombre' onChange={handleInput} />
            <input className='input' type='text' name='correo' placeholder='Correo' onChange={handleInput} />
            <input className='input' type='password' name='password' placeholder='Contraseña' onChange={handleInput} />
            <button className='button'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar Sesion
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
