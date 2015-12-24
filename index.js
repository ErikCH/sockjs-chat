/* jshint node: true */
'use strict';

module.exports = {
	name: 'sockjs-chat',
		included: function(app) {
			this._super.included(app);
			app.import(app.bowerDirectory + '/sockjs-client/dist/sockjs-0.3.4.js');
		}
};
