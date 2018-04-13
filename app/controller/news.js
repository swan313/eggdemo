const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const dataList = ctx.service.news.list();
    await ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;