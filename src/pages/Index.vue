<template>
  <Layout>
    <div>
      <div class="flex flex-row md:flex-no-wrap flex-wrap">
        <div
          class="pb-6 md:pb-0 flex-shrink flex-grow ml-auto mr-auto block md:pr-10"
        >
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
              >hi.</strong
            >
          </p>
          <br />
          <p class="text-dynamic">
            I'm a
            <span class="text-purple-500">software engineer</span>,
            <span class="text-purple-500">full-stack web developer</span>, and
            <span class="text-purple-500">devops engineer</span> from Edmonton,
            Alberta, Canada.
          </p>
          <br />
          <p class="text-dynamic">
            I main a
            <span class="text-purple-500">2019 MacBook Pro 16"</span> with
            <span class="text-purple-500">hyper.sh</span>,
            <span class="text-purple-500">VSCode</span>, and
            <span class="text-purple-500">IntelliJ IDEA</span>. (dark themes
            only)
          </p>
          <p class="text-dynamic">
            I'm addicted to
            <span class="text-purple-500">Rocket League</span> and have a strong
            passion for technology. I enjoy designing and developing websites,
            like this one. <span class="text-purple-500">DevOps</span> is a
            topic of particular interest for me, and I'm working on expanding my
            skillset within the field -- I love the concepts of
            <span class="text-purple-500">automate everything</span> and
            <span class="text-purple-500">infrastructure-as-code</span> via
            <span class="text-purple-500">Terraform</span>,
            <span class="text-purple-500">Docker</span>,
            <span class="text-purple-500">Kubernetes</span>,
            <span class="text-purple-500">Serverless</span>, and other cool
            technology.
          </p>
          <p class="text-dynamic">
            I enjoy writing websites in
            <span class="text-purple-500">Vue.js</span> using static/ssr/spa
            frameworks like <span class="text-purple-500">Nuxt.js</span> or
            JAMstack with <span class="text-purple-500">Gridsome</span>.
            <span class="text-purple-500">Kotlin</span> is my favourite language
            right now, and I'm in the process of learning
            <span class="text-purple-500">Rust</span>.
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
    title: "Home",
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
    },
  },
};
</script>
<style></style>;
