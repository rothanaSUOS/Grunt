module.exports = function (grunt){
    // grunt.registerTask('speak',function(){
    //     console.log("I am speaking on grunt.")
    // })

    // grunt.registerTask('rothana',function(){
    //     console.log("phu ying chan rak cher Thida. Nang shuy mac")
    // })

    // grunt .registerTask('both',['speak','rothana']);
    grunt.initConfig({
        concat:{
            js:{
                src: ['js/1.js','js/2.js'],
                dest: 'build/js/script.js'
            },
            css:{
                src: ['css/min.css','css/theme.css'],
                dest: 'build/css/style.css'
            },

        },
        watch: {
            js:{
                files:['js/**/*.js' ],
                tasks:['concat'],
            },
            css:{
                files:['css/**/*.css' ],
                tasks:['concat'],
            },

        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt .registerTask('default',['concat','watch']);

}