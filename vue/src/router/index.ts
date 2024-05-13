import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import BlogTatarskayaFedotovaHome from '../components/pages/blogTatarskayaFedotova/BlogTatarskayaFedotovaHome.vue'
import NewsBlogTatarskayaFedotova from '../components/pages/blogTatarskayaFedotova/NewsBlogTatarskayaFedotova.vue'
import CreateNewsBlogTatarskayaFedotova from '../components/pages/blogTatarskayaFedotova/CreateNewsBlogTatarskayaFedotova.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
    },
  {
    path: '/blog_Tatarskaya_Fedotova_home',
    name: RouteNames.BLOG_TATARSKAYA_FEDOTOVA_HOME,
    component: BlogTatarskayaFedotovaHome
   },
  {
    path: '/news_blog_Tatarskaya_Fedotova/:id',
    name: RouteNames.NEWS_BLOG_TATARSKAYA_FEDOTOVA,
    component: NewsBlogTatarskayaFedotova
  },
  {
    path: '/create_news_blog_Tatarskaya_Fedotova',
    name: RouteNames.CREATE_NEWS_BLOG_TATARSKAYA_FEDOTOVA,
    component: CreateNewsBlogTatarskayaFedotova
  }
]
    
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
