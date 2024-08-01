import { Router } from 'express';
import { login, register, getCurrentUser } from '../controllers/UsersController.js';

const router = Router();

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User Login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User Logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/login', login);

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/register', register);

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: Get the current User
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Current User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.get('/me', getCurrentUser);

export default router;
