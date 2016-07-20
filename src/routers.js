import Router from 'koa-router';

import * as validations from './middlewares/validations.js';
import * as userController from './controllers/userController.js';

const router = new Router();
export default router;

router.param('user_id', validations.validateUserId)
      .get('/users', userController.fetchUserList)
      .get('/users/:user_id', userController.fetchUserById);
