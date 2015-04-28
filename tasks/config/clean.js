/**
 * Due to the destructive nature of this task, always be
 * cautious of the paths you clean.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt ~0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 *
 */

module.exports = function(grunt) {
  grunt.config.set('clean', {
    dist: {
      src: ["./dist"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

};