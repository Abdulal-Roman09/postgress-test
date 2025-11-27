import connectiondb from "../../db/dbConnection.js";

const createStudent = async ({ name, email, age, roll }) => {
  const query = `
    INSERT INTO students (name, email, age, roll)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [name, email, age || null, roll || null];
  const { rows } = await connectiondb.query(query, values);
  return rows[0];
};

export const Student={
    createStudent
}