import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const [loading,setLoading] = useState(true)
  const hasPlaying = Object.keys(props.playing).length > 0;
  console.log(props);
  const { id } = props.match.params;

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false)
  }, []);

  if (loading) return <h2>Cargando video...</h2>;

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : <Redirect to='/404/' />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
