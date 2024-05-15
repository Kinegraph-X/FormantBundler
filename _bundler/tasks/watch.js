module.exports = function(grunt, options) {
	
	let files = [];
	options.browserifyPath.forEach(function(path) {
		files.push(path + '/**/*.js');
		files.push(path + '/**/*.css');
	});
	
	return {
		buildFromSources: {
			files: files,
			options : {
				livereload : true
			},
			tasks: [
				'buildFromSources',
			]
		},
		build: {
			files: files,
			options : {
				livereload : true
			},
			tasks: [
				'build',
			]
		}
	}
}