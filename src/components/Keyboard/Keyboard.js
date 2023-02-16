import React from 'react';

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const STYLE = {
	correct: {
		background: 'var(--color-success)',
		borderColor: 'var(--color-success)',
		color: 'white',
	},
	misplaced: {
		background: 'var(--color-warning)',
		borderColor: 'var(--color-warning)',
		color: 'white',
	},
	incorrect: {
		background: 'var(--color-gray-300)',
		borderColor: 'var(--color-gray-300)',
		color: 'white',
	},
};

function Key({ status, children }) {
	return (
		<span className="keyboard-key" style={STYLE[status]}>
			<strong>{children}</strong>
		</span>
	);
}

function Keyboard({ keyboardStatus }) {
	return (
		<div className="keyboard-wrapper">
			<div className="keyboard-row">
				{firstRow.map(value => (
					<Key key={value} status={keyboardStatus[value]}>
						{value}
					</Key>
				))}
			</div>
			<div className="keyboard-row">
				{secondRow.map(value => (
					<Key key={value} status={keyboardStatus[value]}>
						{value}
					</Key>
				))}
			</div>
			<div className="keyboard-row">
				{thirdRow.map(value => (
					<Key key={value} status={keyboardStatus[value]}>
						{value}
					</Key>
				))}
			</div>
		</div>
	);
}

export default Keyboard;
