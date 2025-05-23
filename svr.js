import express from 'express';
import mysql from "mysql2";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Allow the server to understand JSON and form data from the frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This sets up the current directory path (__dirname) for use with import syntax
// gets the full file path
const __filename = fileURLToPath(import.meta.url); 
// handles form submissions
const __dirname = path.dirname(__filename);

// Serve static files (like HTML, CSS, JS) from the "frontend" folder
app.use(express.static(path.join(__dirname, "frontend")));

// Connection to database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "house_share_app"
});

// Tries connecting to a database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Route to register a user
app.post("/api/register", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // SQL command to insert a new user into the database
  let sql = "INSERT INTO users (email, password, username) VALUES (?, ?, ?)";
  // Run the SQL command with the user data
  con.query(sql, [email, password, username], function (err, result) {
    if (err) throw err;
    res.send("User registered");
  });
});

// Route to log in a user
app.post("/api/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  // SQL command to check if user with that email and password exists
  let sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  // Run the SQL command with the entered credentials
  con.query(sql, [email, password], function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      res.send("Login successful");
    } else {
      res.status(401).send("Wrong details");
    }
  });
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');  
}); 
