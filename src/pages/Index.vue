<template>
  <Layout>
    <div>

      <div class="flex flex-row md:flex-no-wrap flex-wrap">
        <div class="md:mr-10 pb-6 md:pb-0 flex-shrink flex-grow self-center items-center">
          <g-image
            src="~/assets/jonah_matt_couch_bw_purple.jpg"
            height="300"
            width="300"
            fit="inside"
            position="left"
            alt="Jonah Audi"
            class="rounded-lg"
          />
        </div>
        <div class="flex-shrink flex-grow self-center">
          <p>
            <strong
              class="font-bold text-purple-500 text-2xl md:text-4xl border-b-4 border-gray-300 border-dashed"
            >what's good?</strong>
          </p>
          <br />
          <p class="text-gray-700">
            I'm a {{ age() }}-year-old
            <span class="text-purple-500">Software Engineer</span> from Edmonton, Alberta, Canada.
          </p>
          <br />
          <p class="text-gray-600">
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
