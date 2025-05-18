const mysql = require('mysql2');

// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
});

// Connect and run setup
connection.connect(err => {
  if (err) {
    console.log("Error connecting:", err);
    return;
  }
  console.log("Connected to MySQL!");

  // Create the database
  connection.query("CREATE DATABASE IF NOT EXISTS house_share_app", (err) => {
    if (err) throw err;
    console.log("Database created or already exists.");

    
    connection.changeUser({ database: 'house_share_app' }, (err) => {
      if (err) throw err;

      
      // USERS
      connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL,
          first_name VARCHAR(50),
          last_name VARCHAR(50),
          username VARCHAR(50),
          profile_picture TEXT,
          accessibility JSON
        );
      `, (err) => {
        if (err) throw err;
        console.log("Users table ready.");
      });

      // GROUPS
      connection.query(`
        CREATE TABLE IF NOT EXISTS groups (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          description VARCHAR(200),
          code VARCHAR(10) UNIQUE,
          admin_id INT,
          FOREIGN KEY (admin_id) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Groups table ready.");
      });

      // GROUP MEMBERS
      connection.query(`
        CREATE TABLE IF NOT EXISTS group_members (
          group_id INT,
          user_id INT,
          role ENUM('admin', 'member') DEFAULT 'member',
          PRIMARY KEY (group_id, user_id),
          FOREIGN KEY (group_id) REFERENCES groups(id),
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Group members table ready.");
      });

      // TASKS
      connection.query(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          group_id INT,
          title VARCHAR(50) NOT NULL,
          description VARCHAR(200),
          deadline DATETIME,
          recurrence ENUM('once', 'weekly', 'monthly'),
          priority ENUM('low', 'medium', 'high'),
          status ENUM('pending', 'completed') DEFAULT 'pending',
          created_by INT,
          FOREIGN KEY (group_id) REFERENCES groups(id),
          FOREIGN KEY (created_by) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Tasks table ready.");
      });

      // TASK ASSIGNEES
      connection.query(`
        CREATE TABLE IF NOT EXISTS task_assignees (
          task_id INT,
          user_id INT,
          PRIMARY KEY (task_id, user_id),
          FOREIGN KEY (task_id) REFERENCES tasks(id),
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Task assignees table ready.");
      });

      // PAYMENTS
      connection.query(`
        CREATE TABLE IF NOT EXISTS payments (
          id INT AUTO_INCREMENT PRIMARY KEY,
          group_id INT,
          reference VARCHAR(50),
          description VARCHAR(200),
          amount DECIMAL(10,2),
          deadline DATETIME,
          recurrence ENUM('once', 'weekly', 'monthly'),
          priority ENUM('low', 'medium', 'high'),
          created_by INT,
          FOREIGN KEY (group_id) REFERENCES groups(id),
          FOREIGN KEY (created_by) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Payments table ready.");
      });

      // PAYMENT ASSIGNEES
      connection.query(`
        CREATE TABLE IF NOT EXISTS payment_assignees (
          payment_id INT,
          user_id INT,
          PRIMARY KEY (payment_id, user_id),
          FOREIGN KEY (payment_id) REFERENCES payments(id),
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Payment assignees table ready.");
      });

      // NOTIFICATIONS
      connection.query(`
        CREATE TABLE IF NOT EXISTS notifications (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT,
          title VARCHAR(100),
          message TEXT,
          time_left VARCHAR(50),
          type ENUM('task', 'payment'),
          item_id INT,
          seen BOOLEAN DEFAULT FALSE,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Notifications table ready.");
      });

      // POINT SYSTEM
      connection.query(`
        CREATE TABLE IF NOT EXISTS points (
          user_id INT PRIMARY KEY,
          points INT DEFAULT 0,
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
      `, (err) => {
        if (err) throw err;
        console.log("Points table ready.");
        connection.end();
        console.log("Database setup complete and connection closed.");
      });
    });
  });
});
