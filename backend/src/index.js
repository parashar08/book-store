import dotenv from 'dotenv';
import connectDB from './database/db.js';
import app from './app.js';
import { PORT } from './constants.js';

dotenv.config({});

connectDB()
    .then(() => {
        app.on('error', (err) => {
            console.error('Error starting the server: ', err);
            process.exit(1);
        });

        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
