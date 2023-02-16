import React from 'react';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function handleSubmitGuess(tentativeGuess) {
		setGuesses([...guesses, tentativeGuess]);
	}

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
