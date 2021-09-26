import sql from "mssql";
import config from "../config";

const dbSettings = {
  user: config.user,
  password: config.password,
  server: config.server,
  database: config.database,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (err) {
    console.log(err);
  }
}

export { sql };
