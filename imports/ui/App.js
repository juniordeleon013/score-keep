import React from 'react';
import { Players } from './../api/players';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import ListPlayers from './ListPlayers';

export default class App extends React.Component
{
	render(){
		let players = Players.find({}, {sort: { score: -1}}).fetch();
		return ( 
			<div className="container">
				<TitleBar />
				<AddPlayer />
				<ListPlayers players={players}/>
			</div>
		);
	}
}