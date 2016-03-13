module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	clean: {
	  build: {
	    src: ["build/"]
	  }
	},

    copy: {
	    files:{
	    	expand: true, src: ['src/**'], dest: 'build/'
	    }
    },

    uglify: {
	    main: {
		    files: {
		    	'build/src/js/main.min.js': ['src/js/main.js']
		    }
	    }
	},

	sass: {
	    dist: {
		    files: {
		    	'src/css/main.css': 'src/css/main.scss'
		    }
	    }
	},

	cssmin: {
		target: {
			files: {
				'build/src/css/main.min.css': ['src/css/main.css']
			}
		}
	},
	usemin:{
		html: 'build/src/index.html'
	},

	useminPrepare: {
	   html: 'build/src/index.html'
	},

	imagemin: {
	    dynamic: {                         
	      files: [{
	        expand: true,                   
	        cwd: 'build/src/img/',                  
	        src: ['**/*.{png,jpg,gif}'],   
	        dest: '/'                  
	      }]
	    }
	},

	sprite:{
      all: {
        src: 'src/img/sprite/*.png',
        dest: 'build/src/img/sprite/sprite-crash.png',
        destCss: 'src/css/config/sprite.scss'
      }
    },

	watch: {
		main: {
			files: ['src/js/**/*.js'],
				tasks: ['default'],
				options: {
				event: ['added', 'deleted', 'changed']
			}
		},

		sass: {
			files: ['src/css/**/*.scss'],
				tasks: ['default'],
				options: {
				event: ['added', 'deleted', 'changed']
			}
		},

		sprite: {
			files: ['src/img/sprite/*.png'],
				tasks: ['sprite'],
				options: {
				event: ['added', 'deleted', 'changed']
			}
		}
	}
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'imagemin', 'sass', 'cssmin', 'uglify', 'useminPrepare', 'usemin']);
  grunt.registerTask('sprite', ['sprite']);

};
