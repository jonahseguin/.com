<template>
  <Layout>
    <div class="flex flex-row flex-wrap items-center w-full">
      <div v-for="moment in moments" v-bind:key="moment" class="m-4 w-20 md:w-48 self-center ml-auto mr-auto">
        <img
            :src="moment"
            :alt="moment"
            class="rounded-lg self-center"
          />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Moments",
  metaInfo: {
    title: "Moments"
  },
  data() {
    return {
      moments: [
        "/purple/aaron_bimmer_black.jpg",
        "/purple/aaron_bimmer_white.jpg",
        "/purple/audi_mountains.jpg",
        "/purple/goose_mcdonalds_pce.jpg",
        "/purple/jonah_aaron_ass.jpg",
        "/purple/jonah_asap.jpg",
        "/purple/jonah_audi_edm.jpg",
        "/purple/jonah_audi_grad.jpg",
        "/purple/jonah_audi_rain_blur.jpg",
        "/purple/jonah_blonded.jpg",
        "/purple/jonah_cross.jpg",
        "/purple/lawrii_boof.jpg",
        "/purple/lawrii_lot.jpg",
        "/purple/matt_bimmer_yzy.jpg",
        "/purple/thunder_thumbs.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>