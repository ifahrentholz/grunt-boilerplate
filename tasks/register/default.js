module.exports = function(grunt) {
  grunt.registerTask('default', [
    'concat:dev',
    'syncAssets',
    'linkAssets'
  ]);
};