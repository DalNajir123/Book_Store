import express from "express";
import {
  getBook,
  createBook,
  deleteBook,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/create-book", createBook);
router.delete("/delete-book/:_id", deleteBook);

export default router;
