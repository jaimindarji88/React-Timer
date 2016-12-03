import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

import CountdownForm from './../../components/CountdownForm'

describe('CountdownForm', ()=>{

  it('should exist', ()=>{
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown for valid input', ()=>{
    var spy = expect.createSpy();
    var cdForm = TestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(cdForm));
    cdForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown for invalid input', ()=>{
    var spy = expect.createSpy();
    var cdForm = TestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(cdForm));
    cdForm.refs.seconds.value = 'asd123';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
