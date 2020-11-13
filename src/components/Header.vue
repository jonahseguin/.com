<template>
  <div>
    <div class="bg-gradient-to-r dynamic-header rounded-sm py-4">
      <h1
        class="dynamic-header-text text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold antialiased text-center tracking-widest with-my-woes"
      >
        <g-link to="/">jonah seguin</g-link>
      </h1>
    </div>
    <br />
    <div class="flex justify-between">
      <div class="my-1">
        <p class="text-jurple-light font-bold antialiased text-xs">{{ time }}</p>
      </div>
      <div class="my-1">
        <p class="text-jurple-light font-bold antialiased text-xs">{{ date }}</p>
      </div>
    </div>
    <div class="border-2 border-jurple-med rounded-lg border-dashed my-2"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
  },
  mounted() {
    setInterval(() => {
      let date = new Date();
      this.time = date.toLocaleTimeString();
      this.date = date.toLocaleDateString();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.purple-img {
  z-index: 999;
  overflow: hidden;
  height: 100%;
  background: rgba(191, 85, 236, 0.8);
}

.dynamic-header {
  @apply from-jurple-light;
  @apply via-jurple-dark;
  @apply to-jink;
}

.dynamic-header-text {
  @apply text-white;
}

@media (prefers-color-scheme: dark) {
  .dynamic-header {
    @apply from-jink;
    @apply via-jurple-light;
    @apply to-jurple-dark;
  }

  .dynamic-header-text {
    @apply text-black;
  }
}
</style>