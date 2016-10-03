module.exports = function(grunt) {
    var app_files = ['src/fileA.js', 'src/fileB.js'],
        output = 'dist/built.js',
        test_output = 'test/built.js';

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        // Task configuration.
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'build/styles/main.scss'
                }
            }
        },
        bowerInstall: {
            dist: {
                src: ['app/*.html'],
                dependencies: true,
                devDependencies: true,
                exclude: []
            }
        },
        recess: {
            dist: {
                options: {
                    compile: false,
                    noIDs: true
                },
                files: {
                    'src': 'css/**/*.css',
                }
            }
        },
        autoprefixer: {
            dist: {
                options: {
                    diff: true
                },
                src: 'css/**/*.css',
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/main.css': 'css/main.css'
                }
            }
        }
    });
    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat']);

    // Add the grunt-mocha-test tasks.
    grunt.loadNpmTasks('grunt-mocha-test');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['sass', 'bowerInstall', 'recess','autoprefixer', 'cssmin']);
};