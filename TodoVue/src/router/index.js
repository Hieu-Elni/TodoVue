import Vue from 'vue'
import Router from 'vue-router'
import TodoListBasic from '@/components/TodoListBasic'
import TodoListCom from '@/components/Compoment/TodoList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/basic',
      name: 'TodoListBasic',
      component: TodoListBasic
    },
      {
          path: '/compo',
          name: 'TodoListCom',
          component: TodoListCom
      }
  ],
    mode:'history',
})
