# node-server-boilerplate

> Boilerplate for API Server with [koa v2](https://github.com/koajs/koa/tree/v2.x) written in Node.js and ES6.

## Requirements

- node ^6.0.0
- npm ^3.9.0

## Dependencies

- Watcher and hot-reload: [nodemon](http://nodemon.io/)
- Build: [babel](http://babeljs.io/)
    + tools: babel-cli, babel-core
    + presets: babel-preset-es2015-node6, babel-preset-stage-3
- Deployment: [PM2](https://github.com/Unitech/pm2)
- Tech Stack: 
    + [Koa 2](https://github.com/koajs/koa/tree/v2.x)
    + [koa-bodyparser](https://github.com/koajs/bodyparser/tree/3.x), [koa-logger](https://github.com/koajs/logger/tree/next), [koa-router](https://github.com/alexmingoia/koa-router/tree/master), [kcors](https://github.com/koajs/cors/tree/v2.x)
    + PostgreSQL: [pg](https://github.com/brianc/node-postgres), [pg-pool](https://github.com/brianc/node-pg-pool)
    + ES7 async/await support

## Build Setup

``` bash
# install dependencies
npm install

# run for development with hot reload at localhost:3000
npm run dev

# build for production
npm run build

# run for production with pm2
npm run prd
```

## License

MIT