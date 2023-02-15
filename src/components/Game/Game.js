import React from 'react';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function addGuesses(guess) {
		const nextGuesses = [
			...guesses,
			{
				guess,
				id: Math.random(),
			},
		];
		setGuesses(nextGuesses);
	}

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput addGuesses={addGuesses} />
		</>
	);
}

export default Game;
