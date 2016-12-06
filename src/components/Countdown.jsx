import React from 'react'
import Clock from './Clock'
import CountdownForm from './CountdownForm'
import Controls from './Controls'

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
      if (newCount === 0)
        this.setState({countdownStatus: 'stopped'});
    }, 1000);
  },
  componentDidUpdate: function(pProps, pState){
    if (this.state.countdownStatus !== pState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
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
  handleStatusChange: function(status){
    this.setState({
      countdownStatus: status
    });
  },
  componentWillUnmount: function(){
    console.log('unmount')
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render: function(){
    var {count, countdownStatus} = this.state;

    var renderControls = ()=>{
      if (countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    };
    
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControls()}
      </div>
    )
  }
});

module.exports = Countdown;
