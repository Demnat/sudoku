import React from 'react';
import Tile from './Tile';

import styles from './Board.css';

const Board = props => {

    const arrayBoard = props.board.split('');
    const arrayInitialBoard = props.initialBoard.split('');

    return (
        <div className={styles.board}>
            { arrayBoard.map((value, index) => {
        
                if (value === '.') {
                    return <Tile key={index} className={styles.write} onPlayerChange={(playerValue) => props.onTileUpdate(playerValue, index)} value=""/>;
                    
                } 
                if (value == arrayInitialBoard[index]) {
                    return <Tile key={index} className={styles.readOnly} value={value} readonly/>
                }

            })}
        </div>
    );
}
    

export default Board;