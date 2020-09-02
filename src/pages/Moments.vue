<template>
  <Layout>
    <div class="flex flex-row flex-wrap items-center w-full">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 w-20 md:w-48 self-center ml-auto mr-auto" v-for="moment in moments" v-bind:key="moment">
        <img :src="moment.url" :alt="moment.desc" class="w-full" />
        <div class="px-4 py-2">
          <p class="text-purple-300 font-bold text-md text-center">{{ moment.desc }}</p>
        </div>
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
        {url: "/purple/aaron_bimmer_black.jpg", desc: 'i <3 ny.'},
        {url: "/purple/aaron_bimmer_white.jpg", desc: 'old.'},
        {url: "/purple/audi_mountains.jpg", desc: 'rockies.'},
        {url: "/purple/goose_mcdonalds_pce.jpg", desc: 'goose & dons.'},
        {url: "/purple/jonah_aaron_ass.jpg", desc: 'front & back.'},
        {url: "/purple/jonah_asap.jpg", desc: 'a$ap.'},
        {url: "/purple/jonah_audi_edm.jpg", desc: 'audi.'},
        {url: "/purple/jonah_audi_grad.jpg", desc: 'grad 2020.'},
        {url: "/purple/jonah_audi_rain_blur.jpg", desc: 'turtle.'},
        {url: "/purple/jonah_blonded.jpg", desc: 'blonded.'},
        {url: "/purple/jonah_cross.jpg", desc: 'jesus.'},
        {url: "/purple/lawrii_boof.jpg", desc: 'boof.'},
        {url: "/purple/lawrii_lot.jpg", desc: 'after hours.'},
        {url: "/purple/matt_bimmer_yzy.jpg", desc: 'blakc bimmer.'},
        {url: "/purple/thunder_thumbs.jpg", desc: 'thunder thumbs.'}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>