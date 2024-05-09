

module.exports = function (grunt) {
	
	const currentName = grunt.cli.options.appName;
	if (typeof currentName === 'undefined' || !currentName) {
		console.error('Error : no bundle name given. ', 'usage : grunt --appName <applicationName> <createApp|build|buildFromSources|watch>')
		return;
	}
	else if (!grunt.cli.tasks[0]) {
		console.error('Error : no task name given. ', 'usage : grunt --appName <applicationName> <createApp|build|buildFromSources|watch>')
		return;
	}

	if (grunt.cli.tasks[0] === 'createApp') {
		require("grunt-load-gruntfile")(grunt,{requireResolution: true});
		grunt.loadGruntfile('_scaffolder/');
		return;
	}
	else if (grunt.cli.tasks[0].match(/build|watch/)) {
		require("grunt-load-gruntfile")(grunt,{requireResolution: true});
		grunt.loadGruntfile('_bundler/');
		return;
	}
	
}