import { body, validationResult } from "express-validator";
import { verifyErrors } from "./validatorMiddleware";

// regras para criar novo pet
export const petValidatationRules = [
    body('nome')
        .trim()
        .notEmpty().withMessage('FIELD CANT BE EMPTY')
        .isLength({ min: 3 }).withMessage('MUST BE ATLEAST 3 CHAR'),

    body('especie')
        .notEmpty().withMessage('FIELD CANT BE EMPTY')
        .isIn(['Cão', 'Gato', 'Pássaro']).withMessage('INVALID SPECIES'),

    body('idade')
        .isInt({ min: 0 }).withMessage('MUST BE A POSITIVE INTEGER'),

    body('raca')
        .isLength({ min: 3 }).withMessage('MUST BE ATLEAST 3 CHAR'),

    verifyErrors
];
