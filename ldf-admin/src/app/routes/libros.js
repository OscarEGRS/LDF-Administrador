


const dbConnection = require('../../config/dbConnection');



module.exports = app => {

  const connection = dbConnection();

  connection.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
  
  
  app.get('/', (req, res) => {

    connection.query("SELECT * FROM Libro", (err, result)=>{

      res.render('Paginas/administradorPrincipal', {

        
          libro:result

      });

    });
    
    
    
  });

  app.post('/modificarLibro', (req, res) => {


    connection.query("SELECT * FROM Libro", (err, result)=>{

      res.render('Paginas/modificarLibro', {

        
          libro:result

      });

    });
    
        

  });

  



};
