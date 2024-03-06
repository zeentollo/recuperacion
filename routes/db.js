const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createPool({
    host: 'bdiurjbsfvjumtblrk0d-mysql.services.clever-cloud.com',
    user: 'uegydcpvgknvmcb4',
    password: '3fDVn9plP6friQK3yoMO',
    database: 'bdiurjbsfvjumtblrk0d',
    port: 3306
});

const anadir_user = async (usuario) => {
    await connection.execute('INSERT INTO usuarios (nombre, email, pass) VALUES (?,?,?)', [usuario.nombre, usuario.email, usuario.pass]);
};

const comprobar_user = async (email, pass) => {
    const [usuario] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (usuario.length !== 0) {
        correcto = await bcrypt.compare(pass, usuario[0].pass);
        if (correcto) {
            return usuario[0].id
        } else {
            return false;
        }
    }else{
        return false;
    }
};

const actualizar_pass = async (email, pass) => {
    const [usuario] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (usuario.length!== 0) {
        await connection.execute('UPDATE usuarios SET pass =? WHERE email =?', [pass, email]);
        return true;
    }else{
        return false;
    }
}

const todos_users = async () => {
    const [todos] = await connection.execute('SELECT * FROM usuarios');
    return todos;
}

const todos_objetos = async () => {
    const [todos] = await connection.execute('SELECT * FROM objetos_usuarios');
    return todos;
}

const anadir_objeto_user = async (usuarioId, objeto) => {
    await connection.execute('INSERT INTO objetos_usuario (usuario_id, foto, titulo, descripcion) VALUES (?,?,?,?)', [usuarioId, objeto.foto, objeto.titulo, objeto.descripcion]);
};

module.exports = {
    anadir_user,
    comprobar_user,
    anadir_objeto_user,
    actualizar_pass,
    todos_users,
    todos_objetos
};
