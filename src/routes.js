import Login  from "./pages/Login"
import Register  from "./pages/Register"
import Profile  from "./pages/Profile"
import About  from "./pages/About"
import Contact  from "./pages/Contact"
import VueRouter from "vue-router"

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router