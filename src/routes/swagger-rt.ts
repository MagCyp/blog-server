import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import swaggerOptions from '../docs/swagger/swagger-options';

const router = express.Router();
const swaggerSpec = swaggerJsdoc(swaggerOptions);

router.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export { router };