import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  background: 'pink',
  padding: '10px',
  color: 'white'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' exact style={style} activeStyle={{color: 'black'}}>Home</NavLink>
      <NavLink to='/movies' exact style={style} activeStyle={{color: 'black'}}>Movies</NavLink>
      <NavLink to='/directors' exact style={style} activeStyle={{color: 'black'}}>Directors</NavLink>
      <NavLink to='/actors' exact style={style} activeStyle={{color: 'black'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
