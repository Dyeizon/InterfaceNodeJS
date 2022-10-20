//const Cliente = require('./Cliente.js');
//const ConnectDB = require('./ConnectDB');

const {Pool} = require("pg");

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "TesteInterface",
    password: "Batman",
    port: 5432,
  };
  
module.exports = class ClienteDAO {
    setCliente(cliente) {    
        const text = `
          INSERT INTO Clientes (id, nome, idade)
          VALUES ($1, $2, $3)
          RETURNING id
        `;
        const values = [cliente.id, cliente.nome, cliente.idade];
    
        const pool = new Pool(credentials);
        const result = pool.query(text, values);

        pool.end();
        return result;
    }

    getCliente(clienteId) {
        const text = `SELECT * FROM Clientes WHERE id = $1`;
        const values = [clienteId];
    
        const pool = new Pool(credentials);
        const result = pool.query(text, values); 

        pool.end();
        return result;
    }
    
}


