<template>
  <Layout>
    <div>
      <div class="flex flex-wrap lg:flex-no-wrap xl:flex-no-wrap">
        <div
          class="flex-initial p-2 mb-5 md:mb-0 md:mr-5 lg:mt-32 content-center">
          <img src="/profile-jonah.jpeg" alt="jonah" class="rounded-sm self-center" style="object-fit: cover; max-width: 100%; height: 70%; margin: auto;">
        </div>

        <div class="flex-1 p-2 self-center">
          <p>
            <strong
              class="font-bold text-jurple-light text-2xl md:text-4xl border-b-4 border-dynamic border-dashed"
              >hi, i'm jonah</strong
            >
          </p>
          <br />
          <p class="text-dynamic">
            i'm an experienced 
            <span class="text-highlight">software engineer</span> and 
            <span class="text-highlight">developer</span> 
            from edmonton, alberta, canada.
          </p>
          <br />
          <p class="text-dynamic">
            <span class="font-semibold">currently @</span>
            <br />
            <ul>
              <li><a href="//hypixel.net" target="_blank" class="text-highlight no-underline">Hypixel, Inc. </a> <span class="text-xs">developer</span></li>
              <li><a href="//tsanga.net" target="_blank" class="text-highlight no-underline">Tsanga, Inc. </a> <span class="text-xs">co-founder, ceo</span></li>
              <li><a href="//whatsthedeal.ca" target="_blank" class="text-highlight no-underline">Whats The Deal? </a> <span class="text-xs">cto</span></li>
            </ul>
          </p>
          <br />
          <p class="text-dynamic">
            <span class="font-semibold">previously @</span>
            <br />
            <ul>
              <li><a href="//universalmusic.com" target="_blank" class="text-highlight no-underline">Universal Music Group </a> <span class="text-xs">r&d</span></li>
              <li><a href="//twitter.com/hylistgames" target="_blank" class="text-highlight no-underline">Hylist Games </a> <span class="text-xs">software engineer</span></li>
            </ul>
          </p>
          <br />
          <!--<p class="text-dynamic">
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
          </p>-->
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
