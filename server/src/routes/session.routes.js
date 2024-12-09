const { Router } = require("express");
const sessionControllers = require("../controllers/session.controller.js");

const router = Router();

/**
 * @openapi
 * /healdtech/session/login:
 *   post:
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: zapatacamilo86@gmail.com
 *               password:
 *                 type: string
 *                 example: Qwer.1234
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: zapatacamilo86@gmail.com
 *                 password:
 *                   type: string
 *                   example: Qwer.1234
 */
router.post("/login", sessionControllers.login);
router.post('/logout', sessionControllers.logout);

module.exports = router;
