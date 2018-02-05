import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

function Field(props) {
	return (
		<div className="field">
			<div className="field__row">
				<Cell item={0} squares={props.squares} onClick={props.onClick}></Cell>
				<Cell item={1} squares={props.squares} onClick={props.onClick}></Cell>
				<Cell item={2} squares={props.squares} onClick={props.onClick}></Cell>
			</div>
			<div className="field__row">
				<Cell item={3} squares={props.squares} onClick={props.onClick}></Cell>
				<Cell item={4} squares={props.squares} onClick={props.onClick}></Cell>
				<Cell item={5} squares={props.squares} onClick={props.onClick}></Cell>
			</div>
			<div className="field__row">
				<Cell item={6} squares={props.squares} onClick={props.onClick}></Cell>
				<Cell item={7} squares={props.squares} onClick={props.onClick}></Cell>
				<Cell item={8} squares={props.squares} onClick={props.onClick}></Cell>
			</div>
		</div>
)}

Field.propTypes = {
	onClick: PropTypes.func,
	squares: PropTypes.array
};

export default Field;