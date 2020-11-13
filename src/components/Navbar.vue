<template>
  <div class="container mx-auto">
    <nav class="flex justify-between">
      <div class="my-1 flex-shrink flex-wrap">
        <a class="text-jurple-light font-bold antialiased text-xs md:text-sm no-underline" href="https://www.twitter.com/jonahseguin" target="_blank">@jonahseguin</a>
      </div>
      <ul class="my-1 flex flex-col md:flex-row flex-wrap">
        <li class="mx-2">
          <g-link to="/" class="text-jurple-light font-bold text-sm" exact exact-active-class="text-jurple-dark">home</g-link>
        </li>
        <li class="mx-2">
          <g-link to="/contact" class="text-jurple-light font-bold text-sm" active-class="text-jurple-dark">contact</g-link>
        </li>
        <li class="mx-2">
          <g-link to="/resume" class="text-jurple-light font-bold text-sm" active-class="text-jurple-dark">resume</g-link>
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