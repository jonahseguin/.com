<template>
  <div class="flex items-center justify-center w-screen">
    <div class="m-12">
      <div>
        <Header />

        <Navbar />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";

export default {
  components: {
    Navbar,
    Header
  }
};
</script>

<style>
html {
  font-family: "Inter", sans-serif;
}
</style>
