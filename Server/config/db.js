//This will be configure according to database
import mysql from "mysql2/promise";

const mysqlPool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
})

export default mysqlPool

