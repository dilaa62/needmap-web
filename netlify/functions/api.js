const serverless = require('serverless-http');
const app = require('../../server'); // Memanggil aplikasi Anda

module.exports.handler = serverless(app);