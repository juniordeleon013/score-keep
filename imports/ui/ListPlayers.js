import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';


export default class ListPlayers extends React.Component
{
	

	renderPlayers = () => {
		if( this.props.players.length > 0 ){
			return this.props.players.map( player => {
				return <Player key={player._id} player={player}/>
			});
		}else{
			return (
				<p>
					Add your first to get started.
				</p>
			)
		}

	}

	render(){
		return (
			<div>
				{this.renderPlayers()}
			</div>
		);
	}
}

ListPlayers.propTypes = {
	players: PropTypes.array.isRequired
}