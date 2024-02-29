<template>
  <div class="coming-soon flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">Coming Soon</h1>
    <p class="text-lg mb-8">
      This page is currently under construction. Stay tuned for updates!
    </p>
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
  background-image: url("@/assets/img/bg-comingsoon.jpg"); /* Remplacez par le lien de votre image */
  background-size: cover; /* Couvrir toute la taille de l'écran */
  background-position: center; /* Centrer l'image */
  background-repeat: no-repeat; /* Ne pas répéter l'image */
  color: white; /* Changez la couleur du texte pour améliorer la visibilité */
}
</style>
