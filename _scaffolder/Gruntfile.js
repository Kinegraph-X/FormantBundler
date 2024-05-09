module.exports = function (grunt, options) {
	
	/**
	*
	* command : grunt build-debug --verbose --bundle MP4Parser --config-debug
	*
	*/
//	console.log(grunt.cli.options, process.argv);
	grunt.file.setBase('../../');
	
	var rootPath = 'projects/',
		basePath,
		appName,
		pathToProject,
		baseWord = '_baseApp',
		appWord = 'appName';
	var configPath = [],
		packToDeployPath = []
	
	appName = grunt.cli.options.appName;
	basePath = rootPath + '_scaffolder/';
	pathToProject = appName + '/';
	
	var configPath = [];
	configPath.push(process.cwd() + '/' + basePath + '/tasks');
 
    require('load-grunt-config')(grunt, {
        // path to config.js & task.js files, defaults to grunt dir
        configPath: configPath,
		init : true,
		data : {
			baseWord : baseWord,
			appWord : appWord,
			bundleDir : basePath, 
			appName : appName,
			pathToTemplate : '_scaffolder/',
			pathToProject : pathToProject,
			packToDeployPath : packToDeployPath
		}
	});
	
	grunt.registerTask('createApp', ['copy:createApp']);
	
};