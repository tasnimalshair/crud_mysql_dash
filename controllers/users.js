const { dbConnection } = require("../configurations");

const getUsers = async (req, res, next) => {
  await dbConnection.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) throw err;

    res.status(200).json(rows);
  });
};

const deleteUserById = async (req, res, next) => {
  const { id } = req.params;
  await dbConnection.query(
    `DELETE FROM users WHERE id=${id}`,
    (err, rows, fields) => {
      if (err) throw err;

      res.status(200).json({ msg: "Deleted Successfully" });
    }
  );
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  await dbConnection.query(
    `UPDATE users SET name="${name}" , age=${age} WHERE id=${id}`,
    (err, rows, fields) => {
      if (err) throw err;

      res.status(200).json({ msg: "Updated Successfully" });
    }
  );
};

const insertUser = async (req, res, next) => {
  const { id, name, age } = req.body;
  try {
    await dbConnection.query(
      `INSERT INTO users(id,name,age) 
        VALUES 
        (${id},"${name}",${age})`,
      (err, rows, fields) => {
        if (err) throw err;

        res.status(200).json({ msg: "Inserted Successfully" });
      }
    );
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getUsers,
  insertUser,
  updateUser,
  deleteUserById,
};
