const {appConstants, App} = require('formant');

(function () {
	appConstants.launch({
		UIDPrefix : 'DocumentationApp'
	});
	
	this.appNameLauncher = require('src/App/launcher/appNameLauncher');
}).call(window);