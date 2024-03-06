const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3000

const app = express();

const inicioRouter = require('./routes/inicio');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const recuperarRouter = require('./routes/recuperar');
const adminRouter = require('./routes/admin');
const homeRouter = require('./routes/home');
const menuRouter = require('./routes/menu');
const ver404Router = require('./routes/ver404');
const dashboardRouter = require('./routes/dashboard');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));

app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.use(express.static('public'));

app.use('/', inicioRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/recuperar', recuperarRouter);
app.use('/admin', adminRouter);
app.use('/home', homeRouter);
app.use('/menu', menuRouter);
app.use('/ver404', ver404Router);
app.use('/dashboard', dashboardRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  res.status(404).redirect('ver404');
});

app.use(express.static('public'));

app.listen(port);

console.log(`Servidor ON en el puerto: ${port}`);

module.exports = app;
