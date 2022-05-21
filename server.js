const readline = require("readline");
const mysql2 = require("mysql2");
require("dotenv").config();

const pool = mysql2.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: process.env.USER_SQL || "your user sql server",
  password: process.env.SQL_KEY || "your password sql server",
  // database: "db_belajar",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const command = function () {
  rl.question("input exit for exit\n\nyour sql query : ", async (name) => {
    if (name === "exit") {
      console.log("have nice day");
      promisePool.end();
      return rl.close();
    }

    async function sql() {
      try {
        const query = `${name};`;
        const [column] = await promisePool.execute(query);
        return column;
      } catch (error) {
        return error.message;
      }
    }

    console.table(await sql());
    command();
  });
};

command();
