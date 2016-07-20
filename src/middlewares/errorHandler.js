import ResponseError from '../models/ResponseError.js';

/*
只要接受到请求，则返回的状态码就为 200；出现非业务逻辑错误，返回 500
成功返回结果：{ ok: 1, data: null||{}||[] }
失败返回结果：{ ok: 0, error: { code: custom_code, message: '错误' } }
*/
export function errorHandler () {
    return async (ctx, next) => {
        try {
            await next();
        } catch (error) {
            ctx.body = { ok: 0, error: { code: 500, message: ''} };
            ctx.body.error.message = error.message || 'Interval server error.';
            if (error instanceof ResponseError) {
                ctx.status = error.status = 200;
                ctx.body.error.code = error.code;
            } else {
                ctx.body.error.code = ctx.status = 500;
            }

            if (ctx.app.env == 'development') {
                ctx.body.error.stack = error.stack;
                ctx.app.emit('error', error, ctx);
            }
        } finally {
            if (ctx.pgClient) {
                ctx.pgClient.release();
            }
        }
    }
}

// handle this in the same way you would treat process.on('uncaughtException')
// it is supplied the error as well as the idle client which received the error
export function pgPoolErrorHandler (app) {
    return (error, client) => {
        console.error('A pg pool error has occured. %s', error);
    }
}

export function uncaughtExceptionHandler (app) {
    return error => {
        if (app.env == 'development') {
            console.error('An uncaughtException error has occured. %s', error);
        } else {
            console.error('An uncaughtException error has occured.');
            process.exit(1);
        }
    }
}
