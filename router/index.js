import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from '../.nuxt/utils'

Vue.use(Router)

const Home = () =>
  interopDefault(
    import('../pages/index.vue' /* webpackChunkName: "pages/home" */)
  )
const About = () =>
  interopDefault(
    import('../pages/about/index.vue' /* webpackChunkName: "pages/about" */)
  )

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
        name: 'home'
      },
      {
        path: '/about',
        component: About,
        name: 'about',
        props: true
      }
      // {
      //   path: '*',
      //   component: NOTFOUND,
      //   name: 'not-found'
      // }
    ],
    scrollBehavior() {
      return {
        x: 0,
        y: 0
      }
    }
  })
}
