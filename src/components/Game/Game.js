import React from 'react';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Banner from '../Banner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const isGameOver =
		guesses.length === NUM_OF_GUESSES_ALLOWED ||
		guesses[guesses.length - 1] === answer;

	function handleSubmitGuess(tentativeGuess) {
		setGuesses([...guesses, tentativeGuess]);
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				isGameOver={isGameOver}
			/>
			<Banner guesses={guesses} answer={answer} />
		</>
	);
}

export default Game;
