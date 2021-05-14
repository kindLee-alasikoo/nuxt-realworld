import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45de037a = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _5f0eea38 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _f9f2b5a0 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _95ce2ca0 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _7f445cfc = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _5d7bb6f4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _c839a606 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _45de037a,
    children: [{
      path: "",
      component: _5f0eea38,
      name: "home"
    }, {
      path: "/login",
      component: _f9f2b5a0,
      name: "login"
    }, {
      path: "/register",
      component: _f9f2b5a0,
      name: "register"
    }, {
      path: "/profile",
      component: _95ce2ca0,
      name: "profile"
    }, {
      path: "/settings",
      component: _7f445cfc,
      name: "settings"
    }, {
      path: "/editor",
      component: _5d7bb6f4,
      name: "editor"
    }, {
      path: "/article",
      component: _c839a606,
      name: "article"
    }]
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
