const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("animejs", "animejs/lib/anime.min.js");
  },
};
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      css: {
        // Importez votre fichier CSS principal ici
        import: "./src/main.css",
      },
    },
  },
};
