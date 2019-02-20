module.exports = function(grunt) {
  grunt.config.set("lips", {
    lips: {
      options: {
        namespace: "lips",
        fontFamily: "Impact.ttf",
        txtsize: "24px",
        txtclr: "000000",
        txt: "GruntLIPS",
        bg: "bada55",
        port: process.env.PORT || 1337,
        delay: 0,
        contentType: "png",
        maxAge: 3153600,
        expiryDate: new Date()
      }
    }
  });

  grunt.loadNpmTasks("grunt-lips");
};
