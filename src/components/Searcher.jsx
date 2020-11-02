import React from 'react';
import '../assets/styles/components/Searcher.scss';

const Searcher = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className='input input--searcher' placeholder='Buscar...' />
    </section>
  );
};
export default Searcher;
