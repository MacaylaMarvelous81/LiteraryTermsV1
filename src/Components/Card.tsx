import * as React from "react";
import { connect } from "react-redux";
import { IGameState, GameDispatch } from "../GameState";
import "./Card.css";

interface ICardProps {
	name: string;
	text: string;
}

interface ICardState {
	flipped: boolean;
}

interface IMapStateToProps extends ICardProps {}

interface IMapDispatchToProps {
	flipCard(card: Card): IGameState;
}

function mapStateToProps(state: IGameState, ownProps: ICardProps): IMapStateToProps {
	return {
		name: ownProps.name,
		text: ownProps.text
	};
}

function mapDispatchToProps(dispatch: GameDispatch): IMapDispatchToProps {
	return {
		flipCard(card: Card): IGameState {
			return dispatch({
				type: "FLIP_CARD",
				card: card
			});
		}
	};
}

class Card extends React.Component<ICardProps, ICardState> {
	constructor(props: ICardProps) {
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

		this.props.flipCard(this);
	}
}

export default Card;
export const CardConnected = connect<IMapStateToProps, IMapDispatchToProps, ICardProps, IGameState>(mapStateToProps, mapDispatchToProps)(Card);