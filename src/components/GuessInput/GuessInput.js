import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('');

	function submitAnswer(e) {
		e.preventDefault();
		if (guess.length < 5) {
			window.alert('Please type 5 characters.');
			return;
		}
		console.log({ guess });
		setGuess('');
	}
	return (
		<form className="guess-input-wrapper" onSubmit={submitAnswer}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guess}
				onChange={e => setGuess(e.target.value.toUpperCase())}
				maxLength={5}
				required
			/>
		</form>
	);
}

export default GuessInput;
