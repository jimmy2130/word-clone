import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function getResult(guesses, answer) {
	if (guesses[guesses.length - 1] === answer) {
		return 'win';
	} else if (
		guesses[guesses.length - 1] !== answer &&
		guesses.length === NUM_OF_GUESSES_ALLOWED
	) {
		return 'lose';
	}
	return null;
}

function Banner({ guesses, answer }) {
	const result = getResult(guesses, answer);
	if (result === 'win') {
		return (
			<div className="happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong> {guesses.length} guesses</strong>.
				</p>
			</div>
		);
	} else if (result === 'lose') {
		return (
			<div className="sad banner">
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	}
	return null;
}

export default Banner;
