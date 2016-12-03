import React from 'react'
import Nav from './Nav'

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Nav />
				<p>Jaimin</p>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;