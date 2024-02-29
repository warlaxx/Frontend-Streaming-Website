const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("animejs", "animejs/lib/anime.min.js");
  },
};
