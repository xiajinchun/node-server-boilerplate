import ResponseError from '../models/ResponseError.js';
import * as codes from '../codes.js';
import * as User from '../models/User.js';

export async function fetchUserList (ctx, next) {
    if (ctx.query.id == 0) {
        throw new ResponseError(codes.AD_NOT_FOUND, '错误！'); 
    } else {
        ctx.data = await User.getUserList(ctx.pgClient);
    }
}

export async function fetchUserById (ctx, next) {
    ctx.data = await User.getUserById(ctx.pgClient, ctx.user_id);
}
