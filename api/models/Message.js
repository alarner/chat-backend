/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		username: {
			type: 'string',
			required: true
		},
		message: {
			type: 'text',
			required: true
		},
		room: {
			type: 'string',
			required: true
		}
	}
};

