const db = require("../database/database");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM recursos", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  add: (recurso) => {
    return new Promise((resolve, reject) => {
      const { nome, tipo } = recurso;

      db.run(
        "INSERT INTO recursos (nome, tipo) VALUES (?, ?)",
        [nome, tipo],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.run(
        "DELETE FROM recursos WHERE id = ?",
        [id],
        function (err) {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  },

  update: (id, recurso) => {
    return new Promise((resolve, reject) => {
      const { nome, tipo } = recurso;

      db.run(
        "UPDATE recursos SET nome = ?, tipo = ? WHERE id = ?",
        [nome, tipo, id],
        function (err) {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  }
};