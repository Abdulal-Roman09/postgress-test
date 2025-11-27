import express from "express";
import dotenv from 'dotenv';
import connectiondb from "./db/dbConnection.js";
import { studentRouters } from "./modules/routes/student.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// all routes
app.use('/api/v1', studentRouters);

// Root route
app.get("/", (req, res) => {
    res.send("✅ Server is running");
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
