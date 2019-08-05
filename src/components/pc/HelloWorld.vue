<template>
  <div>
    <svg class="effects" xmlns="http://www.w3.org/2000/svg">
      <filter id="displacementFilter">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="1" result="turbulence" />
      <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="displacementFilter2">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="1" result="turbulence" />
      <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
    <div class="demo as-demo1">
        <Navigation :links="navLinks"></Navigation>
    </div>
    <!-- <div class="demo as-demo2">
        <Navigation :links="navLinks"></Navigation>
    </div> -->
    <TimeLine :TimeLineDataArr="TimeLines"></TimeLine>   
  </div>
</template>

<script>
// import { Navigation} from '../../../components/Navigation';
import Navigation from './components/Navigation'
import TimeLine from './components/TimeLine'
export default {
  components: {
        Navigation,
        TimeLine
  },
 data() {
    return {
       navLinks: ['Home', '说说', '日志', '留言'].map(label => ({url: '#', label})),
       TimeLines:[{
         time:'1687',
         discovery:{
            event:'Discovery',
            content:"Laws of motion"
         },
         scientist:{
            event:'Scientist',
            content:"Newton"
         }
       }
       ,{
         time:'1688',
         discovery:{
            event:'Discovery',
            content:"Laws of motion"
         },
         scientist:{
            event:'Scientist',
            content:"Newton"
         }
       },{
         time:'1689',
         discovery:{
            event:'Discovery',
            content:"Laws of motion"
         },
         scientist:{
            event:'Scientist',
            content:"Newton"
         }
       },{
         time:'1690',
         discovery:{
            event:'Discovery',
            content:"Laws of motion"
         },
         scientist:{
            event:'Scientist',
            content:"Newton"
         }
       },{
         time:'1691',
         discovery:{
            event:'Discovery',
            content:"Laws of motion"
         },
         scientist:{
            event:'Scientist',
            content:"Newton"
         }
       }
       ]
    };
  },
  methods: {

    
  },
   mounted: function () {


  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  height: 100%;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      background: linear-gradient(54deg, #9164ff, #8bfff4);
  color: #3c3f64;
  overflow-x: hidden;
  padding-bottom: 50px;
}

.effects {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.demo {
  --bg: #113;
  --link-color: #08f;
  --link-hover-color: #3ae;

  align-items: center;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  flex: 0 0 50%;
  height: 150px;
}

.svg-border {
  left: 0;
  pointer-events: none;
  position: absolute;
  stroke-dashoffset: 101;
  stroke-dasharray: 101 101;
  stroke-width: 4px;
  top: 0;
  transition: all 0.5s, stroke 0.3s;
}

.nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-item {
  color: var(--link-color);
  font-weight: bold;
  margin: 0 16px;
  padding: 16px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s;
}
.nav-item:hover,
.nav-item.is-active {
  color: var(--link-hover-color);
}
.nav-item:hover .svg-border,
.nav-item.is-active .svg-border {
  stroke-dashoffset: 202;
}

/* demo 1 customizations */

.demo.as-demo1 .nav-item > .svg-border:first-child {
  filter: blur(4px);
  stroke-width: 5px;
}

/* demo 2 customizations */

.demo.as-demo2 {
  --bg: #300;
  --link-color: #c60;
  --link-hover-color: #fc3;
}

.demo.as-demo2 .nav-item > .svg-border {
  filter: url(#displacementFilter);
  margin-left: -3px;
  margin-top: -2px;
  stroke-width: 3px;
}
.demo.as-demo2 .nav-item > .svg-border:first-child {
  filter: url(#displacementFilter2);
  margin-left: -2px;
  margin-top: -1px;
  stroke: #a40;
}




</style>
