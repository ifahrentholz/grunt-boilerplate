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
        'src/javascripts/dependencies/**/*.*',
        'src/javascripts/vendor/**/*.*'
      ],
      dest: 'dist/javascripts/libs.js'
    },

    bundle: {
      src: [
        'src/javascripts/bundle/**/*.*'
      ],
      dest: 'dist/javascripts/main.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};