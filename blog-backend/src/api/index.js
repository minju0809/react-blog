// import Router from 'koa-router';
// import posts from './posts';
const Router = require('Koa-router');
const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

// 라우터 내보내기
// export default api;
module.exports = api;