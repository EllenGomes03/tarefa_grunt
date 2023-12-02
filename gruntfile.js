module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
      // Configuração para a tarefa 'concat'
      concat: {
        options: {
          separator: ';' // Separador entre os arquivos concatenados
        },
        dist: {
          src: ['src/arquivo1.js', 'src/arquivo2.js'], // Arquivos a serem concatenados
          dest: 'dist/bundle.js' // Arquivo de saída
        }
      },
      // Configuração para a tarefa 'uglify'
      uglify: {
        options: {
          mangle: false // Opção para não alterar os nomes das variáveis
        },
        dist: {
          files: {
            'dist/bundle.min.js': ['dist/bundle.js'] // Arquivo de entrada e saída
          }
        }
      }
    });
  
    // Carrega os plugins que fornecem as tarefas
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Definição da tarefa padrão
    grunt.registerTask('default', ['concat', 'uglify']);
  };
  
  