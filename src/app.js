import express from 'express';
import petRoutes from './routes/petRoutes.js';
import { newPet } from './controllers/petController.js';

const app = express();

app.use(express.json());

app.use('/api/pets', petRoutes);

export default app;