import dbClient from "../../db/dbConnection.js";

const insertStudent = async ({ name, email, age, roll }) => {
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

export const Student = {
  insertStudent,
  getStudents,
  getStudentById
}