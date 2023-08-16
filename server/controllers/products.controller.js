import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM products ORDER BY nombre ASC"
    );

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM products WHERE codigo = ?",
      [req.params.codigo]
    );

    if (result.length === 0)
      return res
        .status(404)
        .json({ message: "No se ha encontrado el producto." });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const [result] = await pool.query("INSERT INTO products SET ?", req.body);

    res.json({ result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE products SET ? WHERE codigo = ?",
      [req.body, req.params.codigo]
    );

    //Como esta funcion no devuelve datos, retorno un estado 204.
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM products WHERE codigo = ?", [
      req.params.codigo,
    ]);

    //Si no encuentro el elemento, muestro un error 404.
    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "No se ha encontrado el producto." });

    //Como esta funcion no devuelve datos, retorno un estado 204.
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
