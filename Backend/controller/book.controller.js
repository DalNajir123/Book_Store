import Book from "../model/book.model.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

// export const getBookById = async (req, res) => {
//   try {
//     const { _id } = req.params;
//     const book = await Book.findById(_id);
//     res.status(200).json(book);
//   } catch (error) {
//     console.log("Error while getting book", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error while getting books", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createBook = (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;
    const newBook = new Book({ name, price, category, image, title });
    newBook.save();
    res.status(201).json({ newBook, message: "Book created successfully" });
  } catch (error) {
    console.log("Error while creating book", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log("Received _id:", _id);

    // Validate the ObjectId format
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Create a new ObjectId instance
    const objectId = new mongoose.Types.ObjectId(_id);

    // Find the book by its ObjectId
    const book = await Book.findOne({ name: "Ruby Book" });
    if (!book) {
      console.log("Book not found with ID:", _id);
      return res.status(404).json({ message: "Book not found" });
    }

    // Delete the book
    await book.deleteOne();

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log("Error while deleting book:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
