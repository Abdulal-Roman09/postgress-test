import dbClient from "../../db/dbConnection.js";

const createStudent = async ({ name, email, age, roll }) => {
  const query = `
    INSERT INTO students (name, email, age, roll)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [name, email, age || null, roll || null];
  const { rows } = await dbClient.query(query, values);
  return rows[0];
};


const getStudents = async () => {
  const query = `SELECT * FROM students ORDER BY id ASC`;
  const { rows } = await dbClient.query(query);
  return rows;
};

const getStudentById = async (id) => {
  const query = `SELECT * FROM students WHERE id = $1`;
  const { rows } = await dbClient.query(query, [id]);
  return rows[0];
};

const updateStudent = async (id, data) => {
  const keys = Object.keys(data).filter((k) => data[k] !== undefined);

  if (keys.length === 0) return null; 

  const setClauses = keys.map((k, i) => `${k} = $${i + 1}`).join(", ");

  const values = keys.map((k) => data[k]);

  // id param is the last value

  const query = `UPDATE students SET ${setClauses} WHERE id = $${keys.length + 1} RETURNING *`;
  const { rows } = await dbClient.query(query, [...values, id]);
  return rows[0] || null;
};

export const Student = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
};