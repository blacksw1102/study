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
import DataBindingList2 from '../views/DataBindingList2'
import NestedComponent from '../views/NestedComponent'
import ParentComponent from '../views/ParentComponent'
import ParentComponent3 from '../views/ParentComponent3'
import ParentComponent4 from '../views/ParentComponent4'
import ParentComponent5 from '../views/ParentComponent5'
import ProvideInject from '../views/ProvideInject'
import Calculator from '../views/Calculator'
import CompositionAPI from '../views/CompositionAPI'
import CompositionAPI2 from '../views/CompositionAPI2'
import CompositionAPI3 from '../views/CompositionAPI3'
import CompositionAPI4 from '../views/CompositionAPI4'
import CompositionAPIProvide from '../views/CompositionAPIProvide'

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
  },
  {
    path: '/DataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentComponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/parentComponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/parentComponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/provideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/compositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/compositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/compositionAPI4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/compositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
