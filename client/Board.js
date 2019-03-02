import React from 'react';
import Tile from './Tile';


// import style from './Board.css';

const Board = props => {

    const arrayBoard = props.board.split();
    const arrayInitialBoard = props.initialBoard.split();

    arrayBoard.map((value, index) => {
        if (value === '.') {
            return <Tile key={index} className={'tile'} value=""/>;
            
        } 
        if (value == arrayInitialBoard[index]) {
            return <Tile key={index} className={'tile readOnly'} value={value} readonly/>
        }
    });

}
    

export default Board;