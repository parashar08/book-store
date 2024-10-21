import express from 'express';
import {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBookById,
} from '../controllers/book.controller.js';

const router = express.Router();

router.route('/create-book').post(createBook);
router.route('/').get(getAllBooks);
router.route('/:id', getSingleBook);
router.route('/update-book/:id', updateBook);
router.route('/:id').delete(deleteBookById);

export default router;
