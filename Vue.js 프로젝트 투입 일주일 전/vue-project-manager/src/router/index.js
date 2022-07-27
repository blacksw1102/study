import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml'
import DataBindingInputText from '../views/DataBindingInputText'
import DataBindingInputNumber from '../views/DataBindingInputNumber'
import DataBindingTextarea from '../views/DataBindingTextarea'
import DataBindingSelectBox from '../views/DataBindingSelectBox'
import DataBindingCheckBox from '../views/DataBindingCheckBox'
import DataBindingCheckBox2 from '../views/DataBindingCheckBox2'
import DataBindingRadio from '../views/DataBindingRadio'
import DataBindingImg from '../views/DataBindingImg'
import DataBindingButton from '../views/DataBindingButton'
import DataBindingClass from '../views/DataBindingClass'
import DataBindingList from '../views/DataBindingList'
import RenderingIf from '../views/RenderingIf'
import EventClick from '../views/EventClick'
import EventChange from '../views/EventChange'
import EventKey from '../views/EventKey'
import Computed from '../views/Computed'
import Watch from '../views/Watch'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dataBindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/DataBindingInputNumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/DataBindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/DataBindingSelectBox',
    name: 'DataBindingSelectBox',
    component: DataBindingSelectBox
  },
  {
    path: '/DataBindingCheckBox',
    name: 'DataBindingCheckBox',
    component: DataBindingCheckBox
  },
  {
    path: '/DataBindingCheckBox2',
    name: 'DataBindingCheckBox2',
    component: DataBindingCheckBox2
  },
  {
    path: '/DataBindingRadio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/DataBindingImg',
    name: 'DataBindingImg',
    component: DataBindingImg
  },
  {
    path: '/DataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/DataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/RenderingIf',
    name: 'RenderingIf',
    component: RenderingIf
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/EventKey',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/Watch',
    name: 'Watch',
    component: Watch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
