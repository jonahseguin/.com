import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap'
  });
  head.meta.push({
    name: 'keywords',
    content: 'Jonah,Seguin,Software,Engineer,Edmonton,HTML,CSS,JavaScript,Full-Stack,Java,Kotlin,Vue.js,Gridsome,Website,Developer,Development,WebDev'
  });
  head.meta.push({
    name: 'robots',
    content: 'index,follow'
  });
  head.meta.push({
    name: 'copyright',
    content: 'JonahSeguin.com is copyright (c) 2020 Jonah Seguin'
  });
  head.meta.push({
    name: 'google',
    content: 'nositelinkssearchbox'
  });
  head.meta.push({
    name: 'author',
    content: 'Jonah Seguin'
  });
  head.meta.push({
    name: 'owner',
    content: 'Jonah Seguin'
  });
  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black'
  });
  head.meta.push({
    name: 'og:title',
    content: 'Jonah Seguin'
  });
  head.meta.push({
    name: 'og:url',
    content: 'https://jonahseguin.com'
  });
  head.meta.push({
    name: 'og:image',
    content: 'https://jonahseguin.com/profile-jonah.jpeg'
  });
  head.meta.push({
    name: 'og:site_name',
    content: 'Jonah Seguin'
  });
  head.meta.push({
    name: 'og:description',
    content: 'Software Engineer from Edmonton, Alberta, Canada.'
  });
  head.meta.push({
    name: 'og:email',
    content: 'me@jonahseguin.com'
  });
  head.meta.push({
    name: 'twitter:card',
    content: 'summary'
  });
  head.meta.push({
    name: 'twitter:site',
    content: '@jonahseguin'
  });
  head.meta.push({
    name: 'twitter:title',
    content: 'Jonah Seguin'
  });
  head.meta.push({
    name: 'twitter:description',
    content: 'Software Engineer from Edmonton, Alberta, Canada.'
  });
  head.meta.push({
    name: 'twitter:creator',
    content: '@jonahseguin'
  });
  head.meta.push({
    name: 'twitter:image',
    content: 'https://jonahseguin.com/profile-jonah.jpeg'
  });
  

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
