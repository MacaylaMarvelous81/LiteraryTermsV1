import * as React from "react";
import { connect } from "react-redux";
import { IGameState } from "../GameState";
import "./Card.css";

interface CardProps {
	name: string;
	text: string;
}

interface CardState {
	flipped: boolean;
}

function mapStateToProps(state: IGameState, ownProps: CardProps): CardProps {
	return {
		name: ownProps.name,
		text: ownProps.text
	};
}

class Card extends React.Component<CardProps, CardState> {
	constructor(props: CardProps) {
		super(props);

		this.state = {
			flipped: false
		};
	}
	
	render() {
		return (
			<div className="card" onClick={ () => { this.clicked(); } }>
				<div className="card-body">
					{ this.state.flipped ? this.renderFront() : this.renderBack() }
				</div>
			</div>
		);
	}

	renderFront() {
		return (
			<div className="card-front">
				<h5 className="card-name">{ this.props.name }</h5>
				<p className="card-text">{ this.props.text }</p>
			</div>
		);
	}

	renderBack() {
		return (
			<div className="card-back"></div>
		)
	}

	clicked() {
		if (this.state.flipped) {
			return;
		}

		this.setState({
			flipped: true
		});

		this.props.dispatch({
			type: "FLIP_CARD",
			card: this
		});
	}
}

export default Card;
export const CardConnected = connect<CardProps>(mapStateToProps)(Card);