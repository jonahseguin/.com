<template>
  <div class="flex min-h-screen items-center justify-center w-screen">
    <div class="w-3/5 md:w-1/2">
      <!-- Header and navbar -->
      <div class="mt-4 mb-10">
        <Header />
        <Navbar />
      </div>

      <!-- Router view / slot -->
      <div class="container p-2">
        <transition name="fade" appear>
          <div>
            <slot />
          </div>
        </transition>
      </div>

      <!-- Socials links -->
      <div class="mt-10">
        <Socials />
      </div>

      <!-- Footer -->
      <div class="mt-4">
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
.fade-enter-active {
  transition: opacity .25s ease-out;
}

.fade-enter {
  opacity: 0;
  transition: opacity .25s ease-out;
}

.fade-exit {
  opacity: 0;
  transition: opacity .25s ease-out;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity .25s ease-out;
}


body {
  background-color: white;
}

.text-dynamic {
  @apply text-gray-700;
}

.text-highlight {
  @apply text-jurple-med;
  @apply font-medium
}

@media (prefers-color-scheme: dark) {
  body {
    @apply bg-bluack;
  }

  .text-dynamic {
    @apply text-white;
  }

  .text-highlight {
    @apply text-jurple-light;
  }

}

@font-face {
  font-family: "WithMyWoes";
  src: url("../assets/WithMyWoes.ttf");
  font-weight: normal;
}

.with-my-woes {
  font-family: "WithMyWoes", sans-serif;
  text-transform: uppercase;
}
</style>