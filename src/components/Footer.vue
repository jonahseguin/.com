<template>
  <div class="mx-auto text-center">
    <p class="text-gray-400 text-xs">&copy; {{ year }} jonah seguin. don't steal my sh*t</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>