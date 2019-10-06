const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mys0n1yf0r11@dy',
  database: 'users'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});