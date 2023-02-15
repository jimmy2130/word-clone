import React from 'react';

function GuessInput({ handleSubmitGuess }) {
	const [tentativeGuess, setTentativeGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		if (tentativeGuess.length !== 5) {
			window.alert('Please enter exactly 5 characters. 💖');
			return;
		}
		handleSubmitGuess(tentativeGuess);
		setTentativeGuess('');
	}
	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={tentativeGuess}
				onChange={event => {
					const nextGuess = event.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
				required
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				maxLength={5}
			/>
		</form>
	);
}

export default GuessInput;
