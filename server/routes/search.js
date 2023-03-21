import express from 'express';
import db from '../db/conn.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get a single city information
router.get("/search/:q", async (req, res) => {
  let collection = await db.collection("posts");

  let query = {_id: ObjectId(req.params.q)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
})