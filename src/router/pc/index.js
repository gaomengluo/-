import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pc/HelloWorld'
import SecondPage from '@/components/pc/secondPage'
import Img from '@/components/pc/img'
import Canvas from '@/components/pc/canvas'
import Canvas2 from '@/components/pc/canvas2'
import canvas3D from '@/components/pc/canvas3D'
import ListDetail from '@/components/pc/listDetail'
import Scrolling from '@/components/pc/scrolling'
import SlidingForm from '@/components/pc/slidingform'
import Loading from '@/components/pc/loading'
import YangLoader from '@/components/pc/yangloader'
import SkewHover from '@/components/pc/skewhover'
import Animation from '@/components/pc/animation'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: SecondPage
    },
    {
      path: '/img',
      name: 'img',
      component: Img
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    },
    {
      path: '/canvas2',
      name: 'canvas2',
      component: Canvas2
    },
    {
      path: '/canvas3d',
      name: 'canvas3D',
      component: canvas3D
    },
    {
      path: '/list-detail/:id/:queryTitle',
      name: 'listDetail',
      component: ListDetail
    },
    {
      path: '/scrolling',
      name: 'scrolling',
      component: Scrolling
    },
    {
      path: '/slidingform',
      name: 'slidingform',
      component: SlidingForm
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/yangloader',
      name: 'yangloader',
      component: YangLoader
    },
    {
      path: '/skewhover',
      name: 'skewhover',
      component: SkewHover
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation
    }
  ]
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/m_index.html#/'
    return
  }
  next()
})

export default router
