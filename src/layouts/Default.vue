<template>
  <div class="flex h-screen items-center justify-center w-screen">
    <div class="w-3/5 md:w-1/2">
      <!-- Header and navbar -->
      <div class="mb-20">
        <Header />
        <Navbar />
      </div>

      <!-- Router view / slot -->
      <div class="container p-2">
        <slot />
      </div>

      <!-- Socials links -->
      <div class="mt-20">
        <Socials />
      </div>

      <!-- Footer -->
      <div class="mt-8">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Socials from "~/components/Socials";
import Footer from "~/components/Footer";

export default {
  components: {
    Navbar,
    Header,
    Socials,
    Footer
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: 'WithMyWoes';
  src: url("../assets/WithMyWoes.ttf");
  font-weight: normal;
}

.with-my-woes {
  font-family: 'WithMyWoes', sans-serif;
  text-transform: uppercase;
}

</style>