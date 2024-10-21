import express from 'express';
import { createBook, getAllBooks } from '../controllers/book.controller.js';

const router = express.Router();

router.route('/create-book').post(createBook);
router.route('/').get(getAllBooks);

export default router;
