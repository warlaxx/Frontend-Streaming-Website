const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("animejs", "animejs/lib/anime.min.js");
  },
  css: {
    loaderOptions: {
      css: {
        // Remplacez l'option 'import' par l'option 'url' avec la valeur 'false'
        url: false,
      },
    },
  },
});
