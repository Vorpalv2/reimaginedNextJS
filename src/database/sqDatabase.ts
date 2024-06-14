import sqlite3 from "sqlite3";

const db = new sqlite3.Database("postDB.db", (err) => console.log(err));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS postData(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT,
       BODY Text)`);
});

export default db;
