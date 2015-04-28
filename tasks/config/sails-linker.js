/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */

module.exports = function(grunt) {
  grunt.config.set('sails-linker', {
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="/static/%s"></script>',
        appRoot: ''
      },

      files: {
        '../templates/**/*.html': require('../pipeline').jsFilesToInject
      }
    },

    devJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="/static/%s"></script>',
        appRoot: '',
        relative: true
      },

      files: {
        '../templates/**/*.html': require('../pipeline').jsFilesToInject
      }
    },

    devStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="/static/%s">',
        appRoot: ''
      },

      files: {
        '../templates/**/*.html': require('../pipeline').cssFilesToInject
      }
    },
    devStylesRelative: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="/static/%s">',
        appRoot: '',
        relative: true
      },

      files: {
        '../templates/**/*.html': require('../pipeline').cssFilesToInject
      }
    }
  });

  grunt.loadNpmTasks('grunt-sails-linker');

};