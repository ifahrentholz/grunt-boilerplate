module.exports = function(grunt) {
  grunt.registerTask('syncAssets', [
    'compass:dev',
    'sync:dev'
  ]);
};