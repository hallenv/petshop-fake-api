import express from 'express';
import { petRoutes } from './routes/petRoutes.js';
import { newPet } from './controllers/petController.js';
import { newUser } from './controllers/userController.js';
import { userRoutes } from './routes/userRoutes.js';



const app = express();

app.use(express.json());

app.use('/api/pets', petRoutes);
app.use('/api/users', userRoutes);

export default app;