import * as React from "react";
import { CardConnected } from "./Components/Card";

interface AppProps {}

interface AppState {
	cardFlipped: boolean[];
}

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			cardFlipped: []
		};
	}
	
	render() {
		return (
			<div className="app">
				<header>
					<h1>Literary Terms Card Game</h1>
				</header>
				<CardConnected name="Card Name" text="Card Text"/>
			</div>
		);
	}
}

export default App;