import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import Controls from './../../components/Controls'



describe('Controls', ()=>{
   
    it('should exist', ()=>{
       expect(Controls).toExist();
    });
    
    describe('render', ()=>{
        it('should render pause when started', ()=>{
            var f = ()=>{
                return 1;
            };
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={f}/>)
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
    });

    describe('render', ()=>{
        it('should render start when paiused', ()=>{
            var f = ()=>{
                return 1;
            }
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={f}/>)
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});