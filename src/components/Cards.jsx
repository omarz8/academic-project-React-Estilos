import React from 'react';
import Card from './Card';
import Style from './Cards.module.css';

export default function Cards({cities, onClose}) {

  return (
<div className={Style.cardsContainer}>

  {cities.map( (c, i) => (  

    <div key= {i}> 

    <Card
    max={c.main.temp_max}
    min={c.main.temp_min}
    name={c.name}
    img={c.weather[0].icon}
    onClose={()=> onClose(c.name)}
    />

    </div>
  
)
)}

</div>

  )
};