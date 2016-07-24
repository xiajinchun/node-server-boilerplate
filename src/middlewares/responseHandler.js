/*
只要接受到请求，则返回的状态码就为 200；出现非业务逻辑错误，返回 500
成功返回结果：{ ok: 1, data: {}||[]||null }
失败返回结果：{ ok: 0, error: { code: custom_code, message: '错误' } }
*/
export default function responseHandler() {
    return async (ctx, next) => {
        await next();
        ctx.status = 200;
        ctx.body = { ok: 1, data: ctx.data || null };
    }
}
