// const get = require("../controller/message");
const Route = require("express").Router();

const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
Route.get("/", async( req, res) =>
await  db.query("SELECT * FROM user", (err, rows) =>
    err ? console.log(err) : res.send(rows)
  )
);

module.exports = Route;
