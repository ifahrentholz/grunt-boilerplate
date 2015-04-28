/**
 * Concatenates files
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-concat
 *
 */

module.exports = function(grunt) {
  grunt.config.set('concat', {
    options: {
      stripBanners: true
    },

    libs: {
      src: [
        './assets/javascripts/dependencies/**/*.*',
        './assets/javascripts/vendor/**/*.*'
      ],
      dest: './dist/javascripts/libs.js'
    },

    bundle: {
      src: [
        './assets/javascripts/bundle/**/*.*'
      ],
      dest: './dist/javascripts/main.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};