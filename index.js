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
console.log(staticFolder);
try {
  promiseStat(staticFolder).then((a) => {
    console.log(a);
  });
} catch (err) {
  console.error(err);
}

app.use(koaStatic(path.resolve("./static")));
router.get("/giao", async (ctx) => {
  ctx.body = "giao";
});

app.use(router.routes());

app.listen(3001, () => {
  console.log(`监听端口3001中……`);
});
