/**
 * Compass is an open-source authoring framework for
 * the Sass css preprocessor. It helps you build stylesheets
 * faster with a huge library of Sass mixins and functions,
 * advanced tools for spriting, and workflow improvements
 * including file based Sass configuration and a simple pattern
 * for building and using Compass extensions.
 *
 * ---------------------------------------------------------------
 *
 * This task requires you to have Ruby, Sass, and
 * Compass >=1.0.1 installed.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-compass
 *
 */


module.exports = function (grunt) {
  grunt.config.set('compass', {
    dev: {
      options: {
        sassDir: './assets/stylesheets',
        cssDir: './dist/stylesheets',
        environment: 'development',
        outputStyle: 'expanded',
        sourcemap: false
      }
    },

    prod: {
      options: {
        sassDir: './assets/stylesheets',
        cssDir: './dist/stylesheets',
        environment: 'production',
        outputStyle: 'compressed',
        sourcemap: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};