import express from "express";
import dotenv from 'dotenv';
import dbClient from "./db/dbConnection.js";
import { studentRoutes } from "./modules/routes/student.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Main routes
app.use('/api/v1', studentRoutes);

// Root
app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
