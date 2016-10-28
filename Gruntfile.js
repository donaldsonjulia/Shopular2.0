module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'compressed'
                },
                files: { // Dictionary of files
                    'lib/styles/main.min.css': 'src/styles/main.scss' // 'destination': 'source'
                }
            }
        },

        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['sass', 'watch']);
};
