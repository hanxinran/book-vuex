/**
 * Created by Administrator on 2017/6/7 0007.
 */

import Vue from  'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import {Add,List,Detail} from '../components'

let routes=[
    {path:'/list',component:List},
    {path:'/add',component:Add},
    {path:'/detail/:id',name:'detail',component:Detail},
    {path:'*',redirect:'/list'},


]
export default new VueRouter({routes})

