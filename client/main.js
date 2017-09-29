import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup(() => {
	//tracker execute this code when some change happends
	Tracker.autorun(() => {
		ReactDOM.render(<App />, document.getElementById('app'));
	});
});