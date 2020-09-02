<template>
  <div class="container mx-auto">
    <nav class="flex justify-between">
      <div class="my-1 flex-shrink">
        <p class="text-purple-300 font-bold with-my-woes antialiased text-xs md:text-sm">whats a website?</p>
      </div>
      <ul class="my-1 flex flex-col md:flex-row flex-wrap">
        <li class="mx-2">
          <g-link to="/" class="text-purple-300 font-bold" exact exact-active-class="animate-pulse">/</g-link>
        </li>
        <li class="mx-2">
          <g-link to="/moments" class="text-purple-500 font-bold" active-class="animate-pulse">moments</g-link>
        </li>
        <li class="mx-2">
          <g-link to="/resume" class="text-purple-700 font-bold" active-class="animate-pulse">resume</g-link>
        </li>
        <li class="ml-2">
          <g-link to="/contact" class="text-purple-900 font-bold" active-class="animate-pulse">contact</g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
</style>