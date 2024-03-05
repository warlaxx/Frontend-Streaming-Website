<template>
  <div class="article-preview">
    <div
      v-for="(article, index) in randomArticles"
      :key="index"
      class="article"
    >
      <div class="flex gap-2 pb-1">
        <p class="text-gray-700 font-mono" v-if="article">
          {{ article.published_date }} |
        </p>
        <p class="text-gray-700 font-mono" v-if="article">
          {{ article.byline }}
        </p>
      </div>
      <p class="font-semibold pb-1 text-white font-mono" v-if="article">
        {{ article.title }}
      </p>
      <p class="text-sm text-white font-mono" v-if="article">
        {{ article.abstract }}
      </p>
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
}
</style>
