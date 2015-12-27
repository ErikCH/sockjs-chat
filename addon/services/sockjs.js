/* global SockJS */
import Ember from 'ember';
var run = Ember.run;
var socket=null;

export default Ember.Service.extend(Ember.Evented,{
	setupSockjs: function(url) {
		socket = new SockJS(url);
		socket.addEventListener('message', run.bind(this, function(event) {
			this.trigger('messageReceived', event.data);
			console.log(event.data);
		}));
	},
	   sendInfo: function(message) {
		   if(socket != null){
			   socket.send(message);
		   }
	   }

});

