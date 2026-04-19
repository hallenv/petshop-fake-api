import express from 'express';
import petRoutes from './routes/petRoutes.js';
import { newPet } from './controllers/petController.js';

const app = express();

app.use(express.json());

app.use('/api/pets', petRoutes);

const myLog = (req, res, next) => {
    const date = new Date().toISOString();
    console.log(`[${date}] ${req.method} in ${req.url}`);
    next(); // next() eh usada para passar p o prox middleware
};

const petValidate = (req, res, next) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ CODE: "MISSING INFO" });
    }
    next();
};

router.post('/', petValidate, newPet);

export default app;