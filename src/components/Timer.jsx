import React from 'react'
import Clock from './Clock'
import Controls from './Controls'

var Timer = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
    handleStart: function(){
        this.timer = setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    componentDidUpdate:function (prevProps, prevState) {
        if (prevState.timerStatus !== this.state.timerStatus){
            switch (this.state.timerStatus){
                case 'started':
                    this.handleStart();
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
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    handleStatusChange: function(newStatus){
        this.setState({timerStatus: newStatus});
    },
    render: function(){
        var {timerStatus, count} = this.state;
        return (
          <div>
            <h1 className="page-title">Timer App</h1>
            <Clock totalSeconds={count}/>
            <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
          </div>
        );
    }
});

module.exports = Timer;
