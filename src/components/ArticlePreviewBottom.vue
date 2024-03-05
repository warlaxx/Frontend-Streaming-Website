<template>
  <div
    class="article-preview bg-transparent flex justify-center w-screen gap-10 px-8"
  >
    <div
      v-for="(article, index) in randomArticles"
      :key="index"
      class="article w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex-shrink-0 p-4"
    >
      <p class="text-gray-700" v-if="article">
        {{ article.published_date }}
      </p>

      <p class="text-sm" v-if="article">{{ article.abstract }}</p>
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
.article {
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Arrière-plan transparent */
  max-width: calc(
    25% - 20px
  ); /* Occupe au maximum 25% de la largeur de l'écran */
}
</style>
