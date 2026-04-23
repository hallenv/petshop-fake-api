import express from 'express';
import petRoutes from './routes/dataRoutes.js';
import { newPet } from './controllers/dataController.js';

const app = express();

app.use(express.json());

app.use('/api/pets', petRoutes);

export default app;