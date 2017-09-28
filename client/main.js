import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';


const renderPlayers = (playersList) => {
	return playersList.map( player => (
		<p key={player._id}>
			{player.name} has {player.score} point(s).
			<button onClick={() => Players.update({_id:player._id}, {$inc: {score: -1}})}>-1</button>
			<button onClick={() => Players.update({_id:player._id}, {$inc: {score: 1}})}>+1</button>
			<button onClick={() => Players.remove({_id: player._id})}>X</button>
		</p>
	));
}

const handleSubmit = (event) => {

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

Meteor.startup(() => {
	//tracker execute this code when some change happends
	Tracker.autorun(() => {
		let players = Players.find().fetch();

		let title = 'Score Keep';
		let jsx = ( 
			<div className="container">
				<h1>{title}</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" name="playerName" placeholder="Add player name" />
				</form>
				{renderPlayers(players)}
			</div>
		);

		ReactDOM.render(jsx, document.getElementById('app'));
	});
});