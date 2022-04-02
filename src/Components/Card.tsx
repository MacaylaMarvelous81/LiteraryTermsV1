import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import "./Card.css";

interface CardProps {
	name: string;
	text: string;
}

interface CardState {
	flipped: boolean;
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
		const dispatch: Dispatch<any> = useDispatch();
		
		if (this.state.flipped) {
			return;
		}

		this.setState({
			flipped: true
		});
	}
}

export default Card;