const initialState: GameState = {
	flippedCards: []
};

function gameReducer(state: GameState = initialState, action: GameAction): GameState {
	switch (action.type) {
		case "FLIP_CARD":
			return {
				...state,
				flippedCards: state.flippedCards.concat(action.card)
			};
			break;
	}
	return state;
}

export default gameReducer;