import ResponseError from '../models/ResponseError.js';
import * as codes from '../codes.js';

export async function getUserList (pgClient) {
    let result = await pgClient.query('select * from "user"');
    return result.rows;    
}

export async function getUserById (pgClient, user_id) {
    let result = await pgClient.query('select * from "user" where user_id = $1', [user_id]);
    return result.rows[0];
}
