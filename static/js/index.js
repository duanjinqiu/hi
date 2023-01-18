Vue.component(
  "root",
  Vue.extend({
    data() {
      return {
        count: 0,
      };
    },
    template: `
        <div>
            <img class="hi" src="./img/20201204084219498.jpg" alt="">
            <img class="hi" src="./img/OIP-C.jpg" alt="">
            <div>
                点击次数
                <button v-on:click="hulu">{{count}}</button>
            </div>
        </div>
    `,
    methods: {
      hulu() {
        this.count++;
      },
    },
  })
);

const app = new Vue({
  render(h) {
    return h("root");
  },
});

app.$mount("#app");
