const mysql = require('mysql');
const {database} =require('./keys');

//Es mas cercano a un entorno de produccion
mysql.createPool(database); 