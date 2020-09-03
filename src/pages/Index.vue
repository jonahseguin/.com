<template>
  <Layout>
    <div>
      <div class="flex flex-row md:flex-no-wrap flex-wrap">
        <div class="pb-6 md:pb-0 flex-shrink flex-grow ml-auto mr-auto block md:pr-10">
          <g-image
            src="~/assets/jonah_matt_couch_bw_purple.jpg"
            width="300"
            height="300"
            fit="inside"
            position="left"
            alt="Jonah Audi"
            quality="100"
            class="rounded-lg"
          />
        </div>
        <div class="flex-shrink flex-grow self-center">
          <p>
            <strong
              class="font-bold text-purple-500 text-2xl md:text-4xl border-b-4 border-purple-500 border-dashed"
            >hi.</strong>
          </p>
          <br />
          <p class="text-dynamic">
            I'm a 
            <span class="text-purple-500">software engineer</span>, <span class="text-purple-500">full-stack web developer</span>, and <span class="text-purple-500">devops engineer</span> from Edmonton, Alberta, Canada.
          </p>
          <br />
          <p class="text-dynamic">
            If you're interested in working with me, I'm usually looking for work: so check out my
            <g-link to="/contact" class="text-purple-500">contact page</g-link>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home"
  },
  methods: {
    age: function() {
      return this.calculateAge(new Date("2001/04/19"));
    },
    calculateAge: function(dateString) {
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
};
</script>
<style></style>;
