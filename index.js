const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const koaStatic = require("koa-static");
const path = require("path");

app.use(koaStatic(path.resolve("./static")));
router.get("/giao", async (ctx) => {
  ctx.body = "giao";
});

app.use(router.routes());

app.listen(3001, () => {
  console.log(`监听端口3001中……`);
});
