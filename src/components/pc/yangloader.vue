<template>
    <div id="yangloader">
     <div class="svg-container">
    <svg id="yinyang" width="100vw" height="100vh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 289" preserveAspectRatio="xMidYMid slice">
      <defs>
      </defs>
      <title>yinyang</title>
      <g class="right">
        <path id="right-door" class="cls-2" d="M302,176a64,64,0,0,1,.5,128v80.5h285V96.5h-285v80" transform="translate(-17 -96)" />
      </g>
      <g class="left">
        <path id="left-door" class="cls-2" d="M302,176a64,64,0,0,0,0,128l.5.5v80H17.5V96.5h285v80" transform="translate(-17 -96)" />
      </g>
      <g id="symbol">
        <g id="right-symbol" class="right">
            <path id="right-circle" class="cls-1" d="M302,240a32,32,0,0,1,0-64,64,64,0,0,1,0,128,32,32,0,0,0,0-64Z" transform="translate(-17 -96)" />
            <circle id="right-dot" class="cls-3" cx="284.79" cy="111.36" r="9.6" />
        </g>
        <g id="left-symbol" class="left">
            <path id="left-circle" class="cls-3" d="M302,176a64,64,0,0,0,0,128,32,32,0,0,0,0-64,32,32,0,0,1,0-64Z" transform="translate(-17 -96)" />
            <circle id="left-dot" class="cls-1" cx="284.79" cy="175.36" r="9.6" />
        </g>
      </g>
      <line id="rightdoor-top-line" class="cls-1 door-line right" x1="285.5" y1="80.5" x2="285.5" y2="0.5" />
      <line id="left-door-top-line" class="cls-1 door-line left" x1="285.5" y1="80" x2="285.5" />
      <line id="left-door-btm-line" class="cls-1 door-line left" x1="285.5" y1="208.5" x2="285.5" y2="288.5" />
      <line id="right-door-btm-line" class="cls-1 door-line right" x1="285.5" y1="209" x2="285.5" y2="289" />
    </svg>
  </div>
  
  <div class="introduction">
    <p><a href="https://www.youtube.com/watch?v=ezmR9Attpyc" target="_blank">A short video</a> explaining the meaning behind yin and yang.</p>
    <p>In Chinese philosophy, yin and yang (/jɪn/ and /jɑːŋ, jæŋ/; Chinese: 阴阳 yīnyáng, lit. "dark-bright", "negative-positive") is a concept of dualism in ancient Chinese philosophy, describing how seemingly opposite or contrary forces may actually be complementary, interconnected, and interdependent in the natural world, and how they may give rise to each other as they interrelate to one another. In Chinese cosmology, the universe creates itself out of a primary chaos of material energy, organized into the cycles of Yin and Yang and formed into objects and lives. Yin is the receptive and Yang the active principle, seen in all forms of change and difference such as the annual cycle (winter and summer), the landscape (north-facing shade and south-facing brightness), sexual coupling (female and male), the formation of both men and women as characters, and sociopolitical history (disorder and order)...<a href="https://en.wikipedia.org/wiki/Yin_and_yang" target="_blank">Learn more.</a></p>
    <button>Replay the Loading Animation</button>
  </div>
    </div>
</template>


<script>
export default {
  name: "ListView",
  data() {
    return {};
  },
  methods: {},
  mounted() {

      // A repsonsive yin/yang loader

const replayBtn = document.querySelector("button");
    replayBtn.addEventListener("click", replay);
    const tl = new TimelineMax();
    tl.to("#symbol", 3, {rotation: -360, transformOrigin:"50% 50%", ease: Power0.easeNone});
    tl.to(".door-line", 0.3, {strokeDashoffset: 0});
    tl.to(".left", 1, {x: "-50vw", ease: Sine.easeOut});
    tl.to(".right", 1, {x: "50vw", ease: Sine.easeOut}, "-=1");
    tl.set(".svg-container", {display: "none"});
    console.log(symbol)


    let count = 2; // we already rotated once before the first replay, so we start with 2;
    function replay() {
      const tl2 = new TimelineMax();
      tl2.set(".svg-container", {display: "block"});
      tl2.to(".left", 1, {x: "0", ease: Sine.easeOut});
      tl2.to(".right", 1, {x: "0", ease: Sine.easeOut}, "-=1");
      tl2.to(".door-line", 0.3, {strokeDashoffset: 80});
      tl2.to("#symbol", 3, {rotation: -360 * count, transformOrigin:"50% 50%", ease: Power0.easeNone});
      tl2.to(".door-line", 0.3, {strokeDashoffset: 0});
      tl2.to(".left", 1, {x: "-50vw", ease: Sine.easeOut});
      tl2.to(".right", 1, {x: "50vw", ease: Sine.easeOut}, "-=1");
      tl2.set(".svg-container", {display: "none"});
      count++;
    }
  }
};
</script>
<style lang="less">
.cls-1,.cls-2{fill:#fff;}.cls-1,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3{stroke-miterlimit:10;}.cls-2{stroke:#fff;}
body {
      margin: 0;
    }
    .svg-container {
      width: 100vw;
      height: 100vh;
      position: fixed;
      transform: translateZ(0);
      z-index: 1;
    }
    .introduction {
      width: 100vw;
      min-height: 100vh;
      background: linear-gradient(to bottom, rgba(61, 61, 61,1) ,rgba(0, 0, 0,1));
      text-align: center;
      color: lightgray;
    }
    h1 {
      margin: 0;
      padding: 40px 0 20px 0;
      text-align: center;
    }
    p {
      margin: 0 10vw 10px 10vw;
      text-align: justify;
    }
    a {
      color: pink;
    }
    button {
      text-align: center;
      font-size: 20px;
      border-radius: 5px;
      margin: 20px;
      cursor: pointer;
      background-color: lightgray;
      padding: 5px;
    }
    .door-line {
      stroke-dasharray: 80;
      stroke-dashoffset: 80;
    }
</style>


