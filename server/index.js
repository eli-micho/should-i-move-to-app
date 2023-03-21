// Load environment variables
import "./loadEnvironment.js";
import express from 'express';
import cors from 'cors';
import "express-async-errors";
import search from './routes/search.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /search routes
app.use("/search", search);

// Error handling
app.use((err, _req, res, next) => {
  res.status(500).send("An unexpected error occured")
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});