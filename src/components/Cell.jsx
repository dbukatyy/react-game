import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Cell extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick(this.props.item)
	}

	render() {
		return (
			<button className='field__cell' onClick={this.handleClick}>{this.props.squares[this.props.item]}</button>
		)
	}
}

Cell.propTypes = {
	item: PropTypes.number,
	onClick: PropTypes.func,
	squares: PropTypes.array
};


export default Cell;