import { Router } from 'express';
import { listPets, findPetByID, newPet } from '../controllers/petController.js';
import { petValidatationRules } from '../validators/petValidator.js';

const router = Router();

router.get('/', listPets);
router.get('/:id', findPetByID);
router.post('/', petValidatationRules, newPet);

export default router;
