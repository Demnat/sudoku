import React from 'react';

import style from './Tile.css';

const Tile = props => 
    
    <input type="number" min="1" max="9"
        className={`${style.tile} ${props.readonly ? style.readOnly : style.write}`} 
        value={props.value} 
        onChange={(e)=>props.onPlayerChange(e.target.value)}
    />

export default Tile;