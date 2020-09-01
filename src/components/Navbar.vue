<template>
  <div class="container mx-auto">
    <nav class="flex justify-between">
      <div>
        <g-link to="/" class="text-purple-900 font-bold antialiased" active-class="animate-pulse">/</g-link>
      </div>
      <ul class="flex flex-row">
        <li class="pr-5">
          <g-link to="/blog" class="text-purple-700 font-bold" active-class="animate-pulse">blog</g-link>
        </li>
        <li class="pr-5">
          <g-link to="/resume" class="text-purple-500 font-bold" active-class="animate-pulse">resume</g-link>
        </li>
        <li class="pr-5">
          <g-link to="/contact" class="text-purple-300 font-bold" active-class="animate-pulse">contact</g-link>
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