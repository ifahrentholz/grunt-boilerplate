module.exports = function(grunt) {
  grunt.registerTask('linkAssetsProd', [
    'sails-linker:prodJsRelative',
    'sails-linker:prodStylesRelative'
  ]);
};