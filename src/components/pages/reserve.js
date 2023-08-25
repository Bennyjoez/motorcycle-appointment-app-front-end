import React from 'react'
import NavPanel from '../nav-panel';
import "../../stylesheets/reserve.css";

const Reserve=()=> {
  return (
    <div className='reserve-main-container'>
    <section className="reserve-nav-container">
      <NavPanel />
    </section>
    <section className="reserve-body">This is the Reserve page</section>
  </div>
  )
}

export default Reserve