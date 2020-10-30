import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {logoutRequest} from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';

import logoIcon from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  //metodo de Object para saber cuantas propiedades tiene Object.keys( objeto ).length
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = (props) => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>

      <Link to='/'>
        <img className='header__img' src={logoIcon} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='usuario' />
          }
          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}

          {hasUser ?
            <li><a href='/login' onClick={handleLogout}>Cerrar Sesion</a></li> :
            <Link to='/login'>Iniciar Sesion</Link>}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
