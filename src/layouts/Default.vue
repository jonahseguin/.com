<template>
  <div class="flex items-center justify-center w-screen">
    <div class="my-20 w-3/5 md:w-1/2">
      <!-- Header and navbar -->
      <div class="mb-20">
        <Header />
        <Navbar />
      </div>

      <!-- Router view / slot -->
      <div class="container mt-6">
        <slot />
      </div>

      <!-- Socials links -->
      <div class="mt-20">
        <Socials />
      </div>

    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Socials from "~/components/Socials";

export default {
  components: {
    Navbar,
    Header,
    Socials
  }
};
</script>

<style>

</style>