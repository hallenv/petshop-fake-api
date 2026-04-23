import { Router } from 'express';
import { listUsers, newUser, findUserByID } from '../controllers/userController.js';
import { dataValidatationRules } from '../validators/dataValidator.js';
import db from '../data/database.js';

// router p listar tds os users
router.get('/', listUsers);

// router p encontrar usuario 
usersRouter.get('/:id', findUserByID(), validateRequest, async (req, res) => { 
    const id = parseInt(req.params.id);
    const user = db.data.pets.find(p => p.id === id);

    if (!user) {
    return res.status(404).json({ message: 'USER NOT FOUND' });
    }
    
    res.status(200).json(user);
    });

// router p criar novo user
usersRouter.post('/', userValidatationRules, validateRequest, async (req, res) => {
    const { nome, idade } = req.body;
        
    const newUser = { 
        id: (db.data.users.length > 0 ? Math.max(...db.data.users.map(p => p.id)) : 0) + 1, 
        nome, 
        idade 
    };
    
    db.data.users.push(newUser);
    await db.write();
    
    res.status(201).json(newUser);
    });