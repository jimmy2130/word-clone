import React from 'react';
import { range } from '../../utils';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Guess({ value }) {
	const result = checkGuess(value, answer);
	return (
		<p className="guess">
			{range(5).map(num => (
				<span key={num} className={`cell ${result && result[num].status}`}>
					{result ? result[num].letter : undefined}
				</span>
			))}
		</p>
	);
}

export default Guess;
