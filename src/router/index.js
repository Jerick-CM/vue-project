import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/_Home.vue"
import User from "../views/User.vue"
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: "/contact-us",
    name: "contact",
    component: Contact
  },
  {
    path: "/term-and-condition",
    name: "privacypolicy",
    component: () => import("../views/TermsAndCondition.vue")
  },
  {
    path: "/privacy-policy",
    name: "privacypolicy",
    component: () => import("../views/PrivacyPolicy.vue")
  },

  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
