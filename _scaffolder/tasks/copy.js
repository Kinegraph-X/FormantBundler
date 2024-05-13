module.exports = function (grunt, options) {
	// example using options.currentProject as an alternative to the self expanding string mechanism '<%=currentProject%>'
		
	var baseWord = new RegExp(options.baseWord, 'gi'),
		appWord = new RegExp(options.appWord, 'gi');
	
	return {
		createApp: {
			expand: true,
			cwd: options.pathToTemplate,
			src: [
				'**'
				],
			dest: '<%=pathToProject%>',
			filter : function(src) {
				return !src.match(/_scaffolder\\Gruntfile|_scaffolder\\tasks/)
			},
			rename : function(dest, src) {
				if (src.match(baseWord)) {
					src = src.replace(baseWord, options.appName);
				}
				return src;
			},
			options :{
				process : function(content, srcpath) {
					if (srcpath.match(/index|Launcher|main/)) {
						content = content.replace(appWord, options.appName);
					}
					return content;
				}
			}
		}
	};
}