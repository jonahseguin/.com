<template>
  <div class="mx-auto text-center mb-4">
    <p class="text-jurple-light text-xs">&copy; {{ year }}</p>
    <p class="text-jurple-light text-xs">developed by jonah seguin</p>
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