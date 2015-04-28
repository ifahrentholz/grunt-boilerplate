/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */


/**
 * CSS files to inject in order
 * (if you're using LESS with the built-in default config, you'll want  to change `assets/styles/importer.less` instead.)
 */

var cssFilesToInject = [
  'stylesheets/**/*.css'
];


/**
 * Client-side javascript files to inject in order
 * (uses Grunt-style wildcard/glob/splat expressions)
 */

var jsFilesToInject = [
  // Load sails.io before everything else
  'javascripts/dependencies/jquery/jquery-1.11.2.js',

  // Dependencies like jQuery, or Angular are brought in here
  'javascripts/dependencies/**/*.js',

  // Vendor scripts like bxSlider, or fancybox are brought in
  // here
  'javascripts/vendor/**/*.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'javascripts/bundle/*.js'
];


/**
 * Prefix relative paths to source files so they point to the proper locations
 * (i.e. where the other Grunt tasks spit them out, or in some cases, where
 * they reside in the first place)
 */

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return 'dist/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return 'assets/' + path;
});