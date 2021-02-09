import Login  from "./pages/Login"
import Register  from "./pages/Register"
import Profile  from "./pages/Profile"
import VueRouter from "vue-router"

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router