export function checkGuess(guess, answer) {
	if (!guess) {
		return null;
	}

	const guessChars = guess.toUpperCase().split('');
	const answerChars = answer.split('');

	return guessChars.map((guessChar, index) => {
		const answerChar = answerChars[index];

		let status;
		if (guessChar === answerChar) {
			status = 'correct';
		} else if (answerChars.includes(guessChar)) {
			status = 'misplaced';
		} else {
			status = 'incorrect';
		}
		return {
			letter: guessChar,
			status,
		};
	});
}

export function getKeyboardStatus(guess, answer, keyboardStatus) {
	const result = checkGuess(guess, answer);
	let nextKeyboardStatus = { ...keyboardStatus };
	for (let i = 0; i < result.length; i++) {
		const { letter, status } = result[i];
		if (!nextKeyboardStatus[letter]) {
			nextKeyboardStatus[letter] = status;
		} else if (
			nextKeyboardStatus[letter] === 'misplaced' &&
			status === 'correct'
		) {
			nextKeyboardStatus[letter] = status;
		}
	}
	return nextKeyboardStatus;
}
