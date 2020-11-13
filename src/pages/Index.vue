<template>
  <Layout>
    <div>
      <div class="flex flex-row md:flex-no-wrap flex-wrap">
        <div
          class="flex-1 pb-20 md:pb-0 flex-grow block md:pr-5 mt-32"
        >
          <img src="/profile-jonah.jpeg" alt="jonah" class="align-middle rounded-sm" style="height: 300px; width: 300px;">
        </div>
        <div class="flex-1 self-center">
          <p>
            <strong
              class="font-bold text-jurple-light text-2xl md:text-4xl border-b-4 border-jurple-med border-dashed"
              >hi.</strong
            >
          </p>
          <br />
          <p class="text-dynamic">
            I'm a
            <span class="text-highlight">software engineer</span>,
            <span class="text-highlight">full-stack web developer</span>, and
            <span class="text-highlight">devops engineer</span> from Edmonton,
            Alberta, Canada.
          </p>
          <br />
          <p class="text-dynamic">
            I work on a
            <span class="text-highlight">2019 MacBook Pro 16"</span> with
            <span class="text-highlight">hyper.sh</span>,
            <span class="text-highlight">VSCode</span>, and
            <span class="text-highlight">IntelliJ IDEA</span>.
          </p>
          <br />
          <p class="text-dynamic">
            I'm addicted to
            <span class="text-highlight">Rocket League</span> and have a strong
            passion for technology. I enjoy designing and developing websites,
            like this one.
          </p>
          <br />
          <p class="text-dynamic">
            <span class="text-highlight">DevOps</span> is a
            topic of particular interest for me, and I'm working on expanding my
            skillset within the field.  I love the concepts of
            <span class="text-highlight">automate everything</span> and
            <span class="text-highlight">infrastructure-as-code</span> via
            <span class="text-highlight">Terraform</span>,
            <span class="text-highlight">Docker</span>,
            <span class="text-highlight">Kubernetes</span>,
            <span class="text-highlight">Serverless</span>, and other cool
            technology.
          </p>
          <br />
          <p class="text-dynamic">
            I enjoy writing websites in
            <span class="text-highlight">Vue.js</span> using static/ssr/spa
            frameworks like <span class="text-highlight">Nuxt.js</span> or
            JAMstack with <span class="text-highlight">Gridsome</span>.
            <span class="text-highlight">Kotlin</span> is my favourite language
            right now, and I'm in the process of learning
            <span class="text-highlight">Rust</span>.
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
