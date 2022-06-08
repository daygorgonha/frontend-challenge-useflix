import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/categorias',
    name: 'Categorias',
    component: () => import('../views/CategoryView.vue')
  },
  {
    path: '/categorias/add',
    name: 'Cadastrar Categoria',
    component: () => import('../views/AddCategoryView.vue')
  },
  {
    path: '/categorias/:id/edit',
    name: 'Editar Categoria',
    component: () => import('../views/EditCategoryView.vue')
  },
  {
    path: '/filmes',
    name: 'Filmes',
    component: () => import('../views/MovieView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE } - ${to.name}`
  next()
})

export default router
