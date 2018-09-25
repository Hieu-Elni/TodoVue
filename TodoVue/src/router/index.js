import Vue from 'vue'
import Router from 'vue-router'
import TodoListBasic from '@/components/TodoListBasic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/basic',
      name: 'TodoListBasic',
      component: TodoListBasic
    }
  ],
    mode:'history',
})
