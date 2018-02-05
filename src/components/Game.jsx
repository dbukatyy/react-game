import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import findWinner from '../findWinner';

class Game extends Component {

	constructor() {
		super();

		this.state = {
			xloNext: true,
			stepNumber: 0,
			history: [{
				squares: Array(9).fill(null)	
			}] 
			
		}
	}


	handleClick(i) {
		let {xloNext, stepNumber, history} = this.state;
		const step = history[stepNumber].squares.slice();

		if( !step[i] ) {
			step[i] = (xloNext ? 'X' : 'O');

			xloNext = !xloNext;
			history.push({squares:  step});
			++stepNumber;
		}  

		this.setState({
			xloNext,
			stepNumber,
			history 
		})

	}

	goStep(stepNumber) {
		this.setState({
			stepNumber
		})
	}

	renderHistory() {
		return this.state.history.map((step, stepNumb) => {
			const stepGame = !stepNumb ? 'Start Game' : `Step ${stepNumb}`;
			return (
				<li key={stepNumb}>
					<a href="#" onClick={() => this.goStep(stepNumb)}>{stepGame}</a>
				</li>
			)
		})
	}

	render() {
		const {xloNext, stepNumber, history} = this.state;
		const current = history[stepNumber];
		
		let status = 'Next player is: ' + (xloNext ? 'One(x)' : 'Two(o)');

		let cells = document.querySelectorAll('.field__cell');
		let res = findWinner( history[stepNumber].squares);

		if (res) {
			res.forEach(val => {
				cells[val].classList.add('active');
			})
			

			Array.from(cells).forEach( (item) => {item.setAttribute("disabled", "disabled")});
			status = `${(!xloNext ? 'One(x)' : 'Two(o)')} is WiNNER!`;
		}

		return (
			<div className="game">
				<div className="status">{status}</div>
				<Field 
					squares={current.squares}
					onClick={(i) => this.handleClick(i)}/>			
				<ul className="story">
					{this.renderHistory()}
				</ul>
			</div>
		)
	}
}

export default Game;