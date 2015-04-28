module.exports = function(grunt) {
  grunt.registerTask('dev', [
    'clean',
    'compass:dev',
    'syncAssets',
    'linkAssets',
    'notify'
  ]);
};