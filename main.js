const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const koaStatic = require("koa-static");
const path = require("path");
const fs = require("fs");
const promisify = require("util").promisify;
const promiseStat = promisify(fs.stat);

const staticFolder = path.resolve("./");

app.use(koaStatic(path.resolve("./static")));
router.get("/giao", async (ctx) => {
  ctx.body = "giao";
});
router.get("/getFolderState", async (ctx) => {
  try {
    const huluwa = await promiseStat(staticFolder);
    ctx.body = { huluwa, staticFolder };
  } catch (err) {
    ctx.body = "出错了!!!";
    console.error(err);
  }
});

app.use(router.routes());

app.listen(3001, () => {
  console.log(`监听端口3001中……`);
});
