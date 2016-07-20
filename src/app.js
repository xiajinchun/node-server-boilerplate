import Koa from 'koa';
import koaLogger from 'koa-logger';
import kcors from 'kcors';
import bodyParser from 'koa-bodyparser';
import PgPool from 'pg-pool';

import {errorHandler, pgPoolErrorHandler, uncaughtExceptionHandler} from './middlewares/errorHandler.js';
import responseHandler from './middlewares/responseHandler.js';
import router from './routers.js';
import config from './config.js';

const app = new Koa();
const port = process.env.PORT || 3000;

process.on('uncaughtException', uncaughtExceptionHandler(app));

app.use(koaLogger());
app.use(errorHandler());
app.use(bodyParser());

const pgPool = new PgPool(config.db);
// attach an error handler to the pool for when a connected, idle client
// receives an error by being disconnected, etc
pgPool.on('error', pgPoolErrorHandler(app));

// setup postgresql connection
app.use(async (ctx, next) => {
    ctx.pgClient = await pgPool.connect();
    await next();
});

app.use(responseHandler());

app.use(router.routes());

app.listen(port, () => {
    console.log(`API Server listening on port: ${port}   env: ${app.env}`);
})
