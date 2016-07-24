import Router from 'koa-router';

import userRouter from './userRouter.js';

const router = new Router();
export default router;

userRouter(router);
