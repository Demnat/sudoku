import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Board from './Board';
import  sudoku  from 'sudoku-umd';

import styles from './App.css';
import { join } from 'path';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591....43768192',
            board: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591....43768192'
        };
    }

    restart = () => {
		this.setState({
			board: this.state.initialBoard
		})
	};

    newGame = () => {
        const newGame = sudoku.generate("easy");
        this.setState({
            initialBoard: newGame,
            board: newGame,
            message: ''
		})
    };
    
    check = () => {
        const result = sudoku.solve(this.state.board);
        if ( result === false ) {
            this.setState({message: 'Unfortunately, somewhere there is an error!'});
        } else {
            this.setState({message: 'You are on good way!'})
        }
    };

    solve = () => {
        const result = sudoku.solve(this.state.board);
        console.log(result);
        if ( result === false ) {
            this.setState({message: 'Unfortunately, somewhere there is an error!'});
        } else {
            this.setState({
                message: 'Congratulations!!!',
                board: result
            })
        }
    };

    onTileUpdate = (newValue, tileIndex) => {
        
        const playerBoard = this.state.board.split('');
        playerBoard[tileIndex] = newValue;
        this.setState ({
             board: playerBoard.join()
         });

    };

    render() {
        return (
            <div className={styles.app}>
                <h1 className={styles.appHeader}>Sudoku</h1>
                <Board board={this.state.board} initialBoard={this.state.initialBoard} onTileUpdate={this.onTileUpdate} />
                <div className={styles.appButtonsContainer}>
                    <button className={styles.appButton} onClick={this.check} type="button">Check</button>
                    <button className={styles.appButton} onClick={this.newGame} type="button">New Game</button>
                    <button className={styles.appButton} onClick={this.solve} type="button">Solve</button>
                    <button className={styles.appButton} onClick={this.restart} type="button">Restart</button>
                </div>
                <p>{this.state.message}</p>
            </div>
        );
    }
};

export default hot(module)(App);