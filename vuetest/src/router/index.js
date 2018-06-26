import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/page/List'
import signUp from '@/page/signUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/list',
    	name:'List',
    	component:List
    },{
    	path:'/signUp',
    	name:'signUp',
    	component:signUp
    }
  ]
})
