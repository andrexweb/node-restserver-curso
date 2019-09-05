// ============================
// Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
// Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';

// ============================
// SEED semilla de autenticación
// ============================

//heroku config:set SEED="xxxxxxxx"
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
// Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

//heroku config:set MONGO_URI="mongodb+srv://<user>:<password>@cluster0-zxm7g.mongodb.net/cafe"
process.env.URLDB = urlDB;


// ============================
// Google Cliente ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '569846174973-s7rejij9plrkpff52jr1nls9c05r6482.apps.googleusercontent.com';