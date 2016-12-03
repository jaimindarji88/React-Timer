import React from 'react'
import {Link, IndexLink} from 'react-router'

var Nav = React.createClass({
	render: function(){
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>
							React Timer App
						</li>
						<li>
							<IndexLink to='/' activeClassName='active-link'>Timer</IndexLink>
						</li>
						<li>
							<Link to='/' activeClassName='active-link'>Countdown</Link>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<ul className='menu'>
						<li className='menu-text'>
							Created by <a href="http://www.github.com/jaimindarji88" target='_blank'>Jaimin Darji</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
});

module.exports = Nav;