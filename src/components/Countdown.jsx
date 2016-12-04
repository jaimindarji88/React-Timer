import React from 'react'
import Clock from './Clock'
import CountdownForm from './CountdownForm'

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  startTimer: function(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount > 0 ?  newCount : 0
      });
    }, 1000);
  },
  componentDidUpdate: function(pProps, pState){
    if (this.state.countdownStatus !== pState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        default:
          return;
      }
    }
  },
  handleSetCountdown:function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function(){
    var {count} = this.state
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    )
  }
});

module.exports = Countdown;
