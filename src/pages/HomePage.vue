<template>
  <div class="flex flex-col items-center justify-center h-full bg-red-600">
    <h1 class="text-4xl font-bold mb-4">HOMEPAGE</h1>
    <ArticlePreviewRight class="w-2/6" />
    <ArticlePreviewBottom />
  </div>
</template>

<script>
import ArticlePreviewRight from "@/components/ArticlePreviewRight.vue";
import ArticlePreviewBottom from "@/components/ArticlePreviewBottom.vue";

export default {
  name: "HomePage",
  components: { ArticlePreviewRight, ArticlePreviewBottom },
  setup() {
    return {};
  },
};
</script>

<style></style>
