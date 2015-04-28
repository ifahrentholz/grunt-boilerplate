module.exports = function(grunt) {
  grunt.registerTask('default', [
    'concat',
    'uglify',
    'syncAssets',
    'linkAssets'
  ]);
};