<template>
  <div class="article-preview bg-transparent w-screen px-8 py-6">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10"
    >
      <div
        v-for="(article, index) in randomArticles"
        :key="index"
        class="flex flex-col p-4 h-25"
      >
        <div class="flex flex-row justify-center items-center mb-4">
          <img
            class="w-20 h-20 object-cover rounded-lg mr-4"
            :src="article.media[0]['media-metadata'][2].url"
            :alt="article.title"
          />
          <div class="flex flex-col justify-center">
            <p class="text-white text-sm mb-3 font-mono" v-if="article">
              {{ article.published_date }}
            </p>
            <p class="font-mono text-white leading-tight" v-if="article">
              {{ article.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [], // Stockez les articles récupérés de l'API ici
    };
  },
  computed: {
    randomArticles() {
      return this.shuffleArray(this.articles).slice(0, 4); // Sélectionne 4 articles au hasard
    },
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await fetch(
          "https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=GCI3Ms9dYYJhcO5utgOkKlBgprka5oc9"
        );
        const data = await response.json();
        this.articles = data.results; // Stockez les articles dans la variable articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    shuffleArray(array) {
      // Fonction pour mélanger un tableau
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS ici */
</style>
