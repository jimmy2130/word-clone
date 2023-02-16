import React from 'react';
import Game from '../Game';
import Header from '../Header';

function App() {
	const [gameIndex, setGameIndex] = React.useState(0);

	function restartGame() {
		setGameIndex(gameIndex + 1);
	}

	return (
		<div className="wrapper">
			<Header />

			<div className="game-wrapper">
				<Game key={gameIndex} restartGame={restartGame} />
			</div>
		</div>
	);
}

export default App;
