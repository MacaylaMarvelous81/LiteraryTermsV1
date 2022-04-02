import * as React from "react";
import * as Redux from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import gameReducer from "./GameReducer";

const store: Redux.Store<GameState, GameAction> & {
	dispatch: GameDispatch
} = Redux.createStore(gameReducer, Redux.applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById("root")
);