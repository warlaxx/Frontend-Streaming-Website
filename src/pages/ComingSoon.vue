<template>
  <div
    class="coming-soon pt-32 flex flex-col items-center justify-center h-screen"
  >
    <h1 class="text-4xl font-bold mb-4">Coming Soon</h1>
    <p class="text-lg mb-8">
      This page is currently under construction. Stay tuned for updates!
    </p>
    <img
      src="https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg"
      alt="Coming Soon"
      class="max-w-sm mb-8"
    />
    <a
      href="/"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >Go Back Home</a
    >
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
};
</script>

<style>
/* Ajoutez vos styles personnalisés ici */
.coming-soon {
  background-color: #f3f4f6; /* Choisissez une couleur de fond */
}
</style>
