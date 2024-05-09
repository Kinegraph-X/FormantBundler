const {App, TemplateFactory} = require('formant');

/**
 * @factory appName
 * @launcher
 */
module.exports = function(parentView) {
	return {
		init : function (containerSelector) {
			
			document.querySelector(containerSelector).innerHTML = 'Hello from appName';
			
		}
	}
};