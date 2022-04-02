import Card from "./Components/Card.tsx";

type GameState = {
	flippedCards: Card[];
}

type GameAction = {
	type: string;
	card: Card;
}

type GameDispatch = (args: GameAction) => GameState;