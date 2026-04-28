import { Router } from 'express';
import { listPets, findPetByID, newPet } from '../controllers/petController.js';
import { petValidatationRules } from '../validators/petValidator.js';
import db from '../data/db.js';

const router = Router();

router.get('/', listPets);

// router p encontrar pet 
petsRouter.get('/:id', findPetByID(), validateRequest, async (req, res) => { 
    const id = parseInt(req.params.id);
    const pet = db.data.pets.find(p => p.id === id);

    if (!pet) {
    return res.status(404).json({ message: 'PET NOT FOUND' });
    }
    
    res.status(200).json(pet);
    });


// router p criar novo pet
petsRouter.post('/', petValidatationRules, validateRequest, async (req, res) => {
const { especie, raca, nome } = req.body;
    
const newPet = { 
    id: (db.data.pets.length > 0 ? Math.max(...db.data.pets.map(p => p.id)) : 0) + 1,
    especie, 
    raca, 
    nome 
};

db.data.pets.push(newPet);
await db.write();

res.status(201).json(newPet);
});



export default router;
