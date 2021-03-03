import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import New from '../views/New.vue'
import Test from '../views/New_Home.vue'
import firebase from 'firebase';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/New',
    name: 'New',
    component: New,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import New from '../views/New.vue'
import Test from '../views/New_Home.vue'
import firebase from 'firebase';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/New',
    name: 'New',
    component: New,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser && this.requiresGuest) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      });
    }
    else {
      next();
    }
  }
  else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }
    else {
      next();
    }
  }
})

export default router