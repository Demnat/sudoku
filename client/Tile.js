import React from 'react';

// import style from './Tile.css';

const Tile = props => 
    <input type="number" min="1" max="9"
        // className={style.tile} 
        // onClick={()=> props.metoda} uaktywnienie klawiszy do wpisywania wartości?
        // value={props.value} 
        // onChange={props.handleChange}
    />

export default Tile;