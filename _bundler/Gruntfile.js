const path = require('path');
const exec = require('child_process').execSync;

module.exports = function (grunt) {
	
	grunt.file.setBase('../../');
	const rootPath = '"c:\\production data\\Git';
	const codeBasePath = '/codebase';
	const currentBundle = 'bundleFromSource';
	const projectsFolder = 'projects/';
	const selfPath = projectsFolder + '_bundler';
	const tasksPath = 'tasks';
	
	const currentName = grunt.cli.options.appName;
	if (typeof currentName === 'undefined' || !currentName) {
		console.error('Error : no bundle name given. ', 'usage : grunt --appName <applicationName> <createApp|build|buildFromSources|watch>')
		return;
	}
	
	var bundleConfig = grunt.file.readJSON(selfPath + '/' + currentBundle + '.json');
	if (!bundleConfig) {
		console.error('Error : no bundle content given.', 'Please create the file "' + selfPath + '/' + currentBundle + '.json"')
		return;
	}
	const folderArray = bundleConfig.content;
	const configPath = [], browserifyPath = [];
	folderArray.forEach(function(val, key) {
		browserifyPath.push(rootPath + codeBasePath + val);
	});
	browserifyPath.push(projectsFolder + currentName + '/App/**/*.*');
	configPath.push(path.join(process.cwd(), selfPath + '/' + tasksPath));
	
	require('load-grunt-config')(grunt, {
        // path to config.js & task.js files, defaults to grunt dir
        configPath: configPath,
		init : true,
		data : {
			browserifyPath : browserifyPath,
		}
	});
	
	grunt.registerTask('default', function() {});
	
	grunt.registerTask('buildFromSources', '', function() {
		exec('cd ' + rootPath +  '\\_frameworkCoreBuild" \
&& grunt \
&& cd ..\\_frameworkComponentsBuild \
&& grunt \
&& cd ..\\projects\\' + currentName
+ ' && grunt build');
	});
	
	grunt.registerTask('build', '', function() {
		exec('cd ' + rootPath +  '/projects/' + currentName + '" \
&& grunt build');
	});
}