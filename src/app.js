import Koa from 'koa';
import koaLogger from 'koa-logger';
import kcors from 'kcors';
import bodyParser from 'koa-bodyparser';
import PgPool from 'pg-pool';

import * as errorHandlers from './middlewares/errorHandlers.js';
import responseHandler from './middlewares/responseHandler.js';
import router from './routers/index.js';
import config from '../config/index.js';

const app = new Koa();
const port = config.port;

process.on('uncaughtException', errorHandlers.uncaughtExceptionHandler(app));

app.use(koaLogger());
app.use(errorHandlers.koaErrorHandler());
app.use(bodyParser());

const pgPool = new PgPool(config.db);
// attach an error handler to the pool for when a connected, idle client
// receives an error by being disconnected, etc
pgPool.on('error', errorHandlers.pgPoolErrorHandler(app));

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
