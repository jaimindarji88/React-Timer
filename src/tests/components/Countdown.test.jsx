import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import Countdown from './../../components/Countdown'

describe('Countdown', ()=>{
  it('it exists', ()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', ()=>{
    it('states get updated, count gets updated', ()=>{
      var countdown = TestUtils.renderIntoDocument(
        <Countdown />
      );
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
    });
  });

})
