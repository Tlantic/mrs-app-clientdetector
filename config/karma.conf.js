module.exports = function (config) {
    config.set({
        basePath: '../',
        logLevel: config.LOG_WARN,
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/lib/sinon/sinon-server-1.7.3.js',
            'test/lib/sinon/sinon-1.7.3.js',
			'test/unit/constants.js',
            'test/unit/test.*.js'
        ],
        exclude: [
        ],
        singleRun: true,
        reportSlowerThan: 500,
        autoWatch: true,
        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage', 'junit'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/*.js': ['coverage']
        },
        junitReporter: {
            outputFile: 'test/result/test-results.xml',
            suite: 'unit'
        },
        coverageReporter: {
            type: 'html',
            dir: 'test/result/coverage/'
        }
    });
};