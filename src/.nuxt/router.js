import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fdf1b14 = () => interopDefault(import('../pages/graphes.vue' /* webpackChunkName: "pages/graphes" */))
const _0805e674 = () => interopDefault(import('../pages/loginOld.vue' /* webpackChunkName: "pages/loginOld" */))
const _083787be = () => interopDefault(import('../pages/page/form.vue' /* webpackChunkName: "pages/page/form" */))
const _2f01475f = () => interopDefault(import('../pages/page/login.vue' /* webpackChunkName: "pages/page/login" */))
const _0e3e3e4c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/graphes",
    component: _2fdf1b14,
    name: "graphes"
  }, {
    path: "/loginOld",
    component: _0805e674,
    name: "loginOld"
  }, {
    path: "/page/form",
    component: _083787be,
    name: "page-form"
  }, {
    path: "/page/login",
    component: _2f01475f,
    name: "page-login"
  }, {
    path: "/",
    component: _0e3e3e4c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
