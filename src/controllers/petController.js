import { pets } from "../data/database.js";

// GET (listar tds os pets)
petRouter.get('/', (req, res) => {
    res.status(200).json(db.data.pets);
});

// GET (encontrar pet)
export const findPetByID = async (req, res) => {
    const { id } = req.params;
    const pet = db.data.pets.find(p => p.id === Number(id));

    if (!pet) return res.status(404).json({ message: "PET NOT FOUND" });
    res.status(200).json(pet);
};

// POST (criar pet)
db.data.users.push(newPet)

await db.write();

