const router = require('koa-router')();
const Article = require('../../../database/models/article');

router.prefix('/api');
router.post('/article', async (ctx, next) => {
    const { title, content, author, createTime } = ctx.request.body;
    const tmp = new Article({
        title,
        content,
        author,
        createTime,
    });
    const data = await tmp.save().then(data => {
        console.log('success save');
        return 'ok';
    });
    ctx.body = {
        data,
    };
});

module.exports = router;
