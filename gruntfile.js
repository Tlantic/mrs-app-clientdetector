'use strict';

/*
  Date: 09/27/2013 
  Author: F�bio Akira Yoshida <akira@tlantic.com.br>
  
    Description:    File for build based on Grunt package over NodeJS platform.
 */

module.exports = function (grunt) {
    
    // loading project properties
    var project = grunt.file.readJSON('config/build.conf.json');
    
    
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),               // loading dependencies
        
        // cleaning last build
        clean: {
            options: {
                force: true,
                "no-write": false
            },
            dist: ["dist", "test/result", "docs"],
            min: "dist/minified.js"
        },
        
        // copy minified file
        copy: {
            min: {
                src:  "dist/minified.js",
                dest: "dist/" + project.minifiedDeployFile
            }
        },
        
        // JS validator
        jshint: {
            source: ["src/*.js"]
        },
        
        // running automated tests
        karma: {
            unit: {
                configFile: "config/karma.conf.js"
            }
        },
        
        
        // documentation
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: ["src"],
                    outdir: "docs"
                }
            }
        },
        
        // concat
        concat: {
            options: {
                stripBanners: {
                    block: true,
                    line: true
                },
                process: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dist/' + project.moduleDeployFile
            }
        },
        
        // minify
        uglify: {
            options: {
                mangle: project.obfuscate,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'dist/minified.js' : ['dist/' + project.moduleDeployFile]
                }
            }
        }
        
        
    });
    
    
    // loading node dependencies
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    
    
    // tests
    grunt.registerTask('test', function () {
        grunt.task.run('karma');
    });
    
    // run ALL targets
    grunt.registerTask('all', ['clean', 'jshint', 'test', 'yuidoc', 'concat', 'uglify', 'copy:min', 'clean:min']); //distribute
    
    // Default task(s).
    grunt.registerTask('default', ['all']);
};

