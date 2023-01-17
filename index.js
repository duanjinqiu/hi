const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const koaStatic = require("koa-static");

app.use(koaStatic("./static"));
router.get("/giao", async (ctx) => {
  ctx.body = "giao";
});

app.use(router.routes());

app.listen(3001, () => {
  console.log(`监听端口3001中……`);
});
