import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';


export default class ListPlayers extends React.Component
{
	

	renderPlayers = () => {
		if( this.props.players.length > 0 ){
			return this.props.players.map( player => {
				return <Player key={player._id} player={player}/>
			});
		}else{
			return (
				<p className="center">
					Add your first to get started.
				</p>
			)
		}

	}

	render(){
		return (
			<div>
				<FlipMove>
					{this.renderPlayers()}
				</FlipMove>
			</div>
		);
	}
}

ListPlayers.propTypes = {
	players: PropTypes.array.isRequired
}