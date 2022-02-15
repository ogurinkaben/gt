import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: '/',
        name: 'Description',
        component: () => import('../views/Description.vue')
      },
      {
        path: '/tour/points/item', //ideally will be a dynamic route with something like /:id
        name: 'Points',
        component: () => import('../views/Point.vue')
      },
      {
        path: '/tour/media',
        name: 'Media',
        component: () => import('../views/Media.vue')
      },
    ]
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/tour/create-new',
    name: 'CreateNew',
    component: () => import('../views/CreateNew.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          left: 0,
          top: 0
        })
      }, 500)
    })
  },
})
export default router