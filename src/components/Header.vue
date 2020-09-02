<template>
  <div>
    <div class="bg-gradient-to-r from-purple-900 to-black rounded-lg py-4">
      <h1
        class="text-purple-200 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold antialiased text-center tracking-widest with-my-woes"
      >
        <g-link to="/">jonah seguin</g-link>
      </h1>
    </div>
    <br />
    <div class="flex justify-between">
      <div class="my-1">
        <p class="text-purple-300 font-bold antialiased text-xs">{{ time }}</p>
      </div>
      <div class="my-1">
        <p class="text-purple-300 font-bold antialiased text-xs">{{ date }}</p>
      </div>
    </div>
    <div class="border-2 border-purple-300 border-dotted rounded-lg"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }
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
  @apply rounded-lg;
}
</style>