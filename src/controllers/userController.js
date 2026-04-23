import { users } from "../data/database.js";

// GET (list tds os users)
usersRouter.get('/', (req, res) => {
    res.status(200).json(db.data.users);
});

// GET (encontrar user)
export const findUserByID = async (req, res) => {
    const { id } = req.params;

    // Acessamos 'db.data.pets' para buscar no array do banco
    const user = db.data.users.find(u => u.id === Number(id));

    if (!user) return res.status(404).json({ ERROR: "USER NOT FOUND" });
    
    res.status(200).json(user);
};

// POST (criar user)
db.data.users.push(newUser);

await db.write();

