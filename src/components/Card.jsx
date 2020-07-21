import React from 'react';
import Style from './Card.module.css'; 



export default function Card({min, max, name, img, onClose}) {
  // acá va tu código
  return ( 
<div className={Style.cardContainer}>
  <button className={Style.btn} onClick={onClose}>x</button>
  <h4>{name}</h4>
  <div className={Style.subContainer} >
    <div> 
      <p>Max</p>
      <p>{max}</p>
    </div>
    <div>
      <p>Min</p>
      <p>{min}</p>
    </div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" width="80" height="80"/>
    </div>

  </div>

</div>
   

  )
 
};

