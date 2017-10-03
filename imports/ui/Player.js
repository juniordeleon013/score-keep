import React from 'react';
import PropTypes from 'prop-types';
import { Players } from './../api/players';

export default class Player extends React.Component
{
	render(){
		return (
			<div className="container">
				<div className="row">
			        <div className="col s12" key={this.props.player._id}>
			          <div className="card blue-grey darken-1">
			            <div className="card-content white-text">
			              <span className="card-title">{this.props.player.name}</span>
			              <p>has {this.props.player.score} point(s).</p>
			            </div>
			            <div className="card-action">
			              <a className="waves-effect waves-light btn" onClick={() => Players.update({_id:this.props.player._id}, {$inc: {score: -1}})}><i class="material-icons">exposure_neg_1</i></a>
			              <a className="waves-effect waves-light btn" onClick={() => Players.update({_id:this.props.player._id}, {$inc: {score: 1}})}><i class="material-icons">exposure_plus_1</i></a>
			              <a className="waves-effect waves-light btn" onClick={() => Players.remove({_id: this.props.player._id})}><i class="material-icons">close</i></a>
			            </div>
			          </div>
			        </div>
			      </div>
			</div>
		);
	}
}

Player.propsType = {
	player: PropTypes.string.object
}