module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'compressed',
                    loadPath: [
                        'node_modules/bourbon/app/assets/stylesheets',
                        'node_modules/bourbon-neat/app/assets/stylesheets',

                    ]
                },
                files: { // Dictionary of files
                    'lib/styles/main.min.css': 'src/styles/main.scss', // 'destination': 'source'
                }
            }
        },
        uglify: {
            options: {
                preserveComments: false
            },
            my_target: {
                files: {
                    'lib/js/main.min.js': ['lib/js/main.js'],
                    'lib/js/vendor.min.js': ['lib/js/vendor.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
              files: {
                'lib/js/main.js': ['src/js/*.js'],
                'lib/js/vendor.js': ['src/js/vendor/*.js']
              }
            }
        },
        jshint: {
          all: ['Gruntfile.js', 'src/*.js', 'test/*.js']
        },
        mochaTest: {
          test: {
            options: {
              reporter: 'spec',
              captureFile: 'test/results.txt',
              quiet: false,
              clearRequireCache: false,
              noFail: false
            },
            src: ['test/**/*.js']
          }
        },
        babel: {
          options: {
            sourceMap: true,
            presets: ['babel-preset-es2015']
          },
          dist: {
            files: {
              'lib/js/main.js': 'src/js/main.js'
            }
          }
        },
        haml: {
        dist: {
            files: {
                'index-haml.html': 'index.haml'
            }
        }
    },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'images/'
                }]
            }
        },
        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },
            javascript: {
              files: ['src/js/**/*', 'test/*.js'],
              tasks: ['concat', 'uglify', 'mochaTest', 'jshint']
            },
            img: {
                files: ['images/**/*'],
                tasks: ['imagemin']
            },
            html: {
          files: ['index.haml'],
          tasks: ['haml']
        }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.registerTask('default', ['sass', 'watch', 'imagemin', 'concat', 'uglify', 'jshint', 'mochaTest', 'babel', 'haml']);
};
