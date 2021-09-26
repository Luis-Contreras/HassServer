import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};

export const createNewProducts = async (req, res) => {
  const {
    state,
    holder,
    weight,
    createBy,
    price,
    priceUnit,
    address,
  } = req.body;

  if (state === undefined || holder === undefined || price === undefined) {
    return res.status(400).json({
      msg:
        "Falla en la ejecucion, inserte la totalidad de los campos necesarios",
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("state", sql.VarChar, state)
      .input("holder", sql.VarChar, holder)
      .input("weight", sql.VarChar, weight)
      .input("createBy", sql.VarChar, createBy)
      .input("price", sql.VarChar, price)
      .input("priceUnit", sql.VarChar, priceUnit)
      .input("address", sql.VarChar, address)
      .query(queries.newProduct);

    res.json({ state, holder, weight, createBy, price, priceUnit, address });
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    return res.status(400).json({
      msg: "Falla en la ejecucion, inserte un Id",
    });
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.getProductById);
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    return res.status(400).json({
      msg: "Falla en la ejecucion, inserte un Id",
    });
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.deleteProductById);

    res.send(result.rowsAffected);
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;
  const {
    state,
    holder,
    weight,
    updateBy,
    price,
    priceUnit,
    address,
  } = req.body;

  if (
    state === undefined ||
    holder === undefined ||
    price === undefined ||
    updateBy === undefined
  ) {
    return res.status(400).json({
      msg:
        "Falla en la ejecucion, inserte la totalidad de los campos necesarios",
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Int, id)
      .input("state", sql.VarChar, state)
      .input("holder", sql.VarChar, holder)
      .input("weight", sql.VarChar, weight)
      .input("updateBy", sql.VarChar, updateBy)
      .input("price", sql.VarChar, price)
      .input("priceUnit", sql.VarChar, priceUnit)
      .input("address", sql.VarChar, address)
      .query(queries.updateProductById);

    res.json({ state, holder, weight, updateBy, price, priceUnit, address });
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};
