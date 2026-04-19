import { body, validationResult } from "express-validator";

// regras para criar novo pet
export const petValidatationRules = [
    body('nome')
        .trim()
        .notEmpty().withMessage('FIELD CANT BE EMPTY')
        .isLength({ min: 3 }).withMessage('MUST BE ATLEAST 3 CHAR'),

    body('especie')
        .notEmpty().withMessage('FIELD CANT BE EMPTY'),

    body('idade')
        .isInt({ min: 0 }).withMessage('MUST BE A POSITIVE INTEGER'),
        
    // middleware para enviar erros
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ ERROR: errors.array() });
        }
        next();
    }
];
