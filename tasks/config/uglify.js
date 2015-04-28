/**
 * This plugin will compress and mangle the input files using
 * the provided options.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */

module.exports = function(grunt) {
  grunt.config.set('uglify', {
    default: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        preserveComments: 'some'
      },
      files: {
        './dist/javascripts/libs.min.js': ['./dist/javascripts/libs.js'],
        './dist/javascripts/main.min.js': ['./dist/javascripts/main.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};