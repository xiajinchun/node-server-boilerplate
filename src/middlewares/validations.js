import ResponseError from '../models/ResponseError.js';
import * as codes from '../codes.js';

export async function validateUserId (user_id, ctx, next) {
    if (!Number.isInteger(+user_id)) {
        throw new ResponseError(codes.ERROR_FIELD_TYPE, '`user_id`字段类型错误！');
    } else {
        ctx.user_id = user_id;
        await next();
    }
}
