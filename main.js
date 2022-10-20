const Cliente = require('./src/Cliente.js')
const ClienteDAO = require('./src/ClienteDAO');

const clienteDAO = new ClienteDAO();

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "TesteInterface",
  password: "Batman",
  port: 5432,
};

// async function pool() {
//     const pool = new Pool(credentials);
//     const now = await pool.query("SELECT NOW()");
//     await pool.end();
  
//     return now;
// }

// async function client() {
//     const client = new Client(credentials);
//     await client.connect();
//     const now = await client.query("SELECT NOW()");
//     await client.end();
  
//     return now;
// }

(async () => {
    // let cliente = new Cliente(2, "Luan", 18);
    // const result = await clienteDAO.setCliente(cliente);

    // const personId = result.rows[0]["id"];
    // console.log("Um cliente foi registrado com o ID " + personId + ".");

})();