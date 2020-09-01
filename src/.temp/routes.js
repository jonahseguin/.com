const c1 = () => import(/* webpackChunkName: "page--src--pages--resume-vue" */ "/Users/jonahseguin/Projects/jonah/jonahseguin.com/src/pages/Resume.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/jonahseguin/Projects/jonah/jonahseguin.com/src/pages/Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/jonahseguin/Projects/jonah/jonahseguin.com/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jonahseguin/Projects/jonah/jonahseguin.com/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jonahseguin/Projects/jonah/jonahseguin.com/src/pages/Index.vue")

export default [
  {
    path: "/resume/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
