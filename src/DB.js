const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    database: 'expressdb',
    user: '063ot7bwvz0vjssgpf3g',
    host: 'us-east.connect.psdb.cloud',
    password: 'pscale_pw_EAUEAmNZe1Vi5gBYJMZxpCGksGq3v2MyNQl0XNhg6oL',
    ssl:{
        rejectUnauthorized: false 
    }
  });
  const result = await connection.query("SELECT 1 + 1 AS Result");
  console.log(result);
}
module.exports = connectDB;
