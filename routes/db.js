const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NOMBRE,
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
};

const todos_users = async () => {
    const [todos] = await connection.execute('SELECT * FROM usuarios');
    return todos;
};

const todos_objetos = async () => {
    const [todos] = await connection.execute('SELECT * FROM objetos_usuarios');
    return todos;
};

const anadir_objeto_user = async (userid, nombre, foto, descripcion) => {
    console.log(userid, nombre, foto, descripcion);
    await connection.execute('INSERT INTO objetos_usuarios (user_id, foto, nombre, descripcion) VALUES (?,?,?,?)', [userid, foto, nombre, descripcion]);
};

const objetos_usuario = async (userid) => {
    const [todos] = await connection.execute('SELECT * FROM objetos_usuarios WHERE user_id =?', [userid]);
    return todos;
};

const borrar_objeto_user = async (id) => {
    console.log(id);
    await connection.execute('DELETE FROM objetos_usuarios WHERE id = ?', [id]);
};

module.exports = {
    anadir_user,
    comprobar_user,
    anadir_objeto_user,
    actualizar_pass,
    todos_users,
    todos_objetos,
    objetos_usuario,
    borrar_objeto_user
};
