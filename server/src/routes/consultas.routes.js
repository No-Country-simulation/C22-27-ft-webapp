const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consulta.controller');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

/**
 * @openapi
 * /healdtech/consultas:
 *  post:
 *    tags:
 *      - Consultation
 *    summary: Create a new consultation
 *    description: Create a new consultation
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              date:
 *                type: string
 *                example: "11/30/2001"
 *                description: The date of the consultation
 *              state:
 *                type: string
 *                example: "active"
 *                description: The state of the consultation
 *              description:
 *                type: string
 *                example: "Description of the consultation"
 *                description: The description of the consultation
 *    responses:
 *      200:
 *        description: Consultation created
 */
router.post('/',checkToken, authorization("admin", "user"), consultaController.createConsultation);

/**
 * @openapi
 * /healdtech/consultas:
 *   get:
 *     tags:
 *       - Consultation
 *     summary: Get all consultations
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 date:
 *                   type: string
 *                   example: 11/30/2001
 *                 state:
 *                   type: string
 *                   example: active
 *                 description:
 *                   type: string
 *                   example: Description of the consultation
 */
router.get('/',checkToken, authorization("admin", "user"), consultaController.findAllConsultations);

router.route('/:id',checkToken, authorization("admin", "user"))
    /**
     * @openapi
     * /healdtech/consultas/{id}:
     *  get:
     *    tags:
     *      - Consultation
     *    summary: Get a consultation by id
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *    description: Get a consultation by id
     *    responses:
     *      200:
     *        description: Consultation found
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                date:
     *                  type: string
     *                  example: 11/30/2001
     *                  description: The date of the consultation
     *                state:
     *                  type: string
     *                  example: active
     *                  description: The state of the consultation
     *                description:
     *                  type: string
     *                  example: Description of the consultation
     *                  description: The description of the consultation
     */
    .get(consultaController.findOneConsultation)
    /**
     * @openapi
     * /healdtech/consultas/{id}:
     *  patch:
     *    tags:
     *      - Consultation
     *    summary: Update patient
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: string
     *          example: 21432irojfew213
     *        description: The patient's id.
     *        example: 21432irojfew213
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              state:
     *                type: string
     *                example: "active"
     *                description: The state of the consultation
     *              description:
     *                type: string
     *                example: "Description of the consultation"
     *                description: The description of the consultation
     *    responses:
     *      200:
     *        description: patient updated
     */
    .patch(consultaController.updateConsultation)
    /**
     * @openapi
     * /healdtech/consultas/{id}:
     *   delete:
     *     tags:
     *       - Consultation
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The id of the consultation to delete
     *         example: 213njlk4234
     *     responses:
     *       200:
     *         description: OK
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: Consultation successfully deleted
     */
    .delete(consultaController.deleteConsultation);
    
module.exports = router;