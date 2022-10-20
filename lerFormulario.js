import Cliente from './src/Cliente.js';
import ClienteDAO from './src/ClienteDAO.js';

export function lerFormulario() {
    let nome = document.forms["formulario"]["nome"].value;
    if (nome == "") {
        alert("O nome está vazio!");
        return false;
    }

    console.log("1");

    let id = document.forms["formulario"]["id"].value;
    let idade = document.forms["formulario"]["idade"].value;
    
    const clienteDAO = new ClienteDAO();

    console.log("2");

    let cliente = new Cliente(id, nome, idade);
    const result = clienteDAO.setCliente(cliente);

    const personId = result.rows[0]["id"];
    console.log("Um cliente foi registrado com o ID " + personId + ".");


    alert("funcionou");
    return true;
}