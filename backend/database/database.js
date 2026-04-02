const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/banco.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS recursos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      tipo TEXT
    )
  `);
});

module.exports = db;