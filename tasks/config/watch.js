/**
 * Run predefined tasks whenever watched file patterns
 * are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt ~0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */

module.exports = function(grunt) {
  grunt.config.set('watch', {
    dev: {
      files: ['./assets/javascripts/**/*.js', './assets/stylesheets/**/*.scss'],
      tasks: ['dev'],
      options: {
        spawn: false
      }
    },
    prod: {
      files: ['./assets/javascripts/**/*.js', './assets/stylesheets/**/*.scss'],
      tasks: ['default'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};

