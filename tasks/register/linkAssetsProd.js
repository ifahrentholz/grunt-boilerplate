module.exports = function(grunt) {
  grunt.registerTask('linkAssetsBuild', [
    'sails-linker:prodJsRelative',
    'sails-linker:prodStylesRelative'
  ]);
};