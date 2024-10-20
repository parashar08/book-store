import { asyncHandler } from '../utils/asyncHandler.js';
import { Book } from '../models/book.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';


export const createBook = asyncHandler(async (req, res) => {
    const { title, description, category, trending, coverImage, oldPrice, newPrice } = req.body;

    if (!title || !description || !category || !trending || !coverImage || !oldPrice || !newPrice) {
        throw new ApiError(400, "All fields are required");
    }

    const existedBook = await Book.findOne({ title });

    if (existedBook) {
        throw new ApiError(409, "Book already exists");
    }

    const book = await Book.create({
        title,
        description,
        category,
        trending,
        coverImage,
        oldPrice,
        newPrice
    });

    const createdBook = await Book.findById(book?._id);

    if (!createdBook) {
        throw new ApiError(500, "Error creating book");
    }

    return res.status(201).json(new ApiResponse(201, createdBook, "Book created successfully"));

})