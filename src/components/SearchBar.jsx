import React from 'react';
import Style from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
<div className={Style.SearchBarContainer} >
  <input type="text" placeholder= "ciudad..." />
  <button className={Style.BtnAdd} onClick={()=> props.onSearch( "buscando..." ) } >Agregar</button>
</div>

  )
   
};