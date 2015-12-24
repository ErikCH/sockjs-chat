
import Ember from 'ember';

export default Ember.Controller.extend({
	sockjs: Ember.inject.service('sockjs'),
	actions:{
		receiveMessage: function(message){
			$('#chat-content').val(function(i, text){
				return text + message+ '\n';
			});
			this.set('message',message);

		},
	   sendMessage: function(message, username){
		   console.log(username);
		   console.log(message);
		   var send = this.get('sockjs');
		   send.sendInfo(username + ': ' + message);

	   }
	}
});

