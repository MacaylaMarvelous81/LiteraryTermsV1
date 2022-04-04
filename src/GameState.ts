import Card from "./Components/Card";

export interface IGameState {
	flippedCards: Card[];
}

export interface IGameAction {
	type: string;
	card: Card;
}

export type GameDispatch = (args: IGameAction) => IGameState;