import { pets } from "../data/petData.js";

// GET (listar pets)
export const listPets = (req, res) => {

    res.status(200).json(pets);
};

// GET (encontrar pet)
export const findPetByID = (req, res) => {
    const { id } = req.params;
    const pet = pets.find(p => p.id === Number(id));

    if (!pet) return res.status(404).json({ ERROR: "NOT FOUND" });
    res.status(200).json(pet);
};

// POST (criar pet)
export const newPet = (req, res) => {
    const novoPet = { id: Date.now(), ...req.body };

    pets.push(novoPet);
    res.status(201).json(novoPet);
};
