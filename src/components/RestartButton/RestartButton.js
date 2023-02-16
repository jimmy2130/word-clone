import React from 'react';

function RestartButton({ restartGame }) {
	return (
		<button className="restart-btn" onClick={restartGame}>
			Restart
		</button>
	);
}

export default RestartButton;
