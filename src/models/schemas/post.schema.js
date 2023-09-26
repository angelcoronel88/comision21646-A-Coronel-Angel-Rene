import { body } from "express-validator";

export const createPostSchema = [
    body('title')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('content')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('urlLink')
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe ser vacio'),
]


export const editPostSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('content')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('urlLink')
        .optional()
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe ser vacio'),
] 