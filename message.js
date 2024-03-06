const mysql = require("mysql");
const body=require("body-parser");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

const get =  (req, res) => {
  try {
    const users = db.query("SELECT * FROM user", (err, rows) =>
      err ? console.log(err) : console.log(rows)
    );
    res.send(users);
  } catch (error) {
    console.log(error.message)
  }
  const numberedRows = rows.map((row, index) => {
    return { ...row, rowNum: index + 1 }; // Adding a rowNum property to each row
  });
  res.render('index', { rows: numberedRows });
};

exports.index =get ;
