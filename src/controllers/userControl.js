import { getConnection, sql, queries } from "../database";
import bcryptjs from "bcrypt";

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (username === undefined || password === undefined) {
    return res.status(400).json({
      msg:
        "Falla en la ejecucion, inserte la totalidad de los campos necesarios",
    });
  }

  try {
    const pool = await getConnection();
    const userData = await pool
      .request()
      .input("username", sql.VarChar, username)
      .query(queries.getUser);

    const userPwd = userData.recordset[0].password;
    const role = userData.recordset[0].role;
    const isPwdCorrect = await bcryptjs.compare(password, userPwd);

    if (isPwdCorrect) {
      return res.status(200).json({
        username,
        role,
      });
    } else {
      return res.status(204).json({
        msg: "autenticacion fallida",
      });
    }
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};

export const createUser = async (req, res) => {
  const { username, password, role } = req.body;

  if (username === undefined || password === undefined || role === undefined) {
    return res.status(400).json({
      msg:
        "Falla en la ejecucion, inserte la totalidad de los campos necesarios",
    });
  }

  try {
    const pwdHash = await bcryptjs.hash(password, 8);
    const pool = await getConnection();
    await pool
      .request()
      .input("username", sql.VarChar, username)
      .input("password", sql.VarChar, pwdHash)
      .input("role", sql.VarChar, role)
      .query(queries.createUser);
    res.json({ username, role });
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};
