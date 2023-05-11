// import Router from 'koa-router';
// import * as postsCtrl from './posts.ctrl';
const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
// posts.put('/:id', postsCtrl.relpace);
posts.patch('/:id', postsCtrl.update);

// export default posts;
module.exports = posts;