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

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
