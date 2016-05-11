module.exports = function(config) {
	config.set({
		basePath: '../',
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'app/**/*.js',
			'test/**/*.spec.js'
		],

	    plugins: [
			'karma-phantomjs-launcher',
      		'karma-jasmine'
    	],
		logLevel: config.LOG_DEBUG,
		color: true
	});
};

