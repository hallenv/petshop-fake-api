import { Router } from 'express';
import { listPets, findPetByID, newPet } from '../controllers/petController';

const router = Router();

router.get('/', listPets);
router.get('/:id', findPetByID);
router.post('/', newPet);

export default router;
