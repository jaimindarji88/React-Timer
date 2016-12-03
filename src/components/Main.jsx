import React from 'react'
import Nav from './Nav'

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Nav />
				<p>What did you say?</p>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;
