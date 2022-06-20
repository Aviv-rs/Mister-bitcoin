import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEditPage from '../views/ContactEditPage.vue'
import StatisticsPage from '../views/StatisticsPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/statistic',
      component: StatisticsPage
    },
    {
      path: '/contact',
      component: ContactApp
    },
    {
      path: '/contact/edit/:contactId?',
      component: ContactEditPage
    },
    {
      path: '/contact/:contactId',
      component: ContactDetails
    },
  ]
})

export default router
