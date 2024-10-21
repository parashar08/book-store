import { asyncHandler } from '../utils/asyncHandler.js';
import { Book } from '../models/book.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// create book
export const createBook = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        category,
        trending,
        coverImage,
        oldPrice,
        newPrice,
    } = req.body;

    if (
        !title ||
        !description ||
        !category ||
        !trending ||
        !coverImage ||
        !oldPrice ||
        !newPrice
    ) {
        throw new ApiError(400, 'All fields are required');
    }

    const existedBook = await Book.findOne({ title });

    if (existedBook) {
        throw new ApiError(409, 'Book already exists');
    }

    const book = await Book.create({
        title,
        description,
        category,
        trending,
        coverImage,
        oldPrice,
        newPrice,
    });

    const createdBook = await Book.findById(book?._id);

    if (!createdBook) {
        throw new ApiError(500, 'Error creating book');
    }

    return res
        .status(201)
        .json(new ApiResponse(201, createdBook, 'Book created successfully'));
});

// get all book
export const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find().sort({ createdAt: -1 });

    return res
        .status(200)
        .json(new ApiResponse(200, books, 'Books fetched successfully'));
});

// get single book
export const getSingleBook = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);

    if (!book) {
        throw new ApiError(404, 'Book not found');
    }

    return res
        .status(200)
        .json(new ApiResponse(200, book, 'Book fetched successfully'));
});

// update book data
export const updateBook = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const bookData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, bookData, {
        new: true,
        runValidators: true,
    });

    if (!updatedBook) {
        throw new ApiError(500, 'Error updating book');
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updatedBook, 'book updated successfully!'));
});

// delete book by its id
export const deleteBookById = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
        throw new ApiError(404, 'book with given id not found!');
    }

    return res
        .status(200)
        .json(new ApiResponse(200, deletedBook, 'book deleted successfully!'));
});
