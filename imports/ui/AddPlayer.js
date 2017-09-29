import React from 'react';
import { Players } from './../api/players';

export default class AddPlayer extends React.Component
{
	handleSubmit = (event) => {

		event.preventDefault();

		let playerName = event.target.playerName.value;

		if(playerName){
			Players.insert({
				name: playerName,
				score: 0,
				createAt: Date()
			});
			event.target.playerName.value = ''; 
		}
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="playerName" placeholder="Add player name" />
			</form>
		);
	}
}