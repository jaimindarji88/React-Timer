import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import Clock from './../../components/Clock.jsx'

describe('Clock', ()=>{
  it('should exist', ()=>{
    expect(Clock).toExist();
  });

  describe('render', ()=>{
    it('should render clock output', ()=>{
      var seconds = 62;
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={seconds} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02')
    });
  });

  describe('formatSeconds', ()=>{
    it('should format seconds', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format when less than 10 min', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});