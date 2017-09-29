import React from 'react';

export default class TitleBar extends React.Component {
	render(){
		return (
			<nav className="green">
				<div className="container">
				    <div className="nav-wrapper">
				      <a href="#" className="brand-logo center">Score Keep</a>
				    </div>
				</div>		
			</nav>
		);
	}
}