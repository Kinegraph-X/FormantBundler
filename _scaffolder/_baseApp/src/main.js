const {appConstants, App} = require('formantjs');

(function () {
	appConstants.launch({
		UIDPrefix : 'DocumentationApp'
	});
	
	this.appNameLauncher = require('src/App/launcher/appNameLauncher');
}).call(window);