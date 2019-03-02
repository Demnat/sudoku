import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Board from './Board'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591….43768192',
            board: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591….43768192'
        };
    }



    render() {
        <div className="App">
            <h1>Sudoku</h1>
            <Board board={this.state.board} initialBoard={this.state.initialBoard}/>
            <div className="buttons">
                <button>Check</button>
                <button>New Game</button>
                <button>Solve</button>
                <button>Restart</button>
            </div>
        </div>
    }
};

//export default hot(module)(App);