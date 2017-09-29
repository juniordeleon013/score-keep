import React from 'react';
import PropTypes from 'prop-types';
import { Players } from './../api/players';

export default class Player extends React.Component
{
	render(){
		return (
			<div className="container">
				<ul className="collection" key={this.props.player._id}>
					<li className="collection-item avatar">
				      <img src="public/user.png" alt="" className="circle" />
				      <span className="title">{this.props.player.name}</span>
				      <p>{this.props.player.score} point(s)
				      </p>
				      <div className="col s4"><a onClick={() => Players.update({_id:this.props.player._id}, {$inc: {score: -1}})} className="secondary-content"><i className="material-icons">remove_circle_outline</i></a></div>
				      <div className="col s4"> <a onClick={() => Players.update({_id:this.props.player._id}, {$inc: {score: 1}})} className="secondary-content"><i className="material-icons">add_circle</i></a></div>
				      <div className="col s4"><a onClick={() => Players.remove({_id: this.props.player._id})} className="secondary-content"><i className="material-icons">clear</i></a></div>
				      
				     
				      
				    </li>
				</ul>
			</div>
		);
	}
}

Player.propsType = {
	player: PropTypes.string.object
}