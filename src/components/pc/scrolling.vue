<template>
    <div id="scrolling">
        <div class="marquee">
            <ul class="marquee-content">
                <li>
                    <i class="fab fa-github"></i>
                </li>
                <li>
                    <i class="fab fa-codepen"></i>
                </li>
                <li>
                    <i class="fab fa-free-code-camp"></i>
                </li>
                <li>
                    <i class="fab fa-dev"></i>
                </li>
                <li>
                    <i class="fab fa-react"></i>
                </li>
                <li>
                    <i class="fab fa-vuejs"></i>
                </li>
                <li>
                    <i class="fab fa-angular"></i>
                </li>
                <li>
                    <i class="fab fa-node"></i>
                </li>
                <li>
                    <i class="fab fa-wordpress"></i>
                </li>
                <li>
                    <i class="fab fa-aws"></i>
                </li>
                <li>
                    <i class="fab fa-docker"></i>
                </li>
                <li>
                    <i class="fab fa-android"></i>
                </li>
            </ul>
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
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #eee;
  color: #111;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    --marquee-width: 80vw;
  --marquee-height: 20vh;
  /* --marquee-elements: 12; */
  /* defined with JavaScript */
  --marquee-elements-displayed: 5;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}

:root {
  --marquee-width: 80vw;
  --marquee-height: 20vh;
  /* --marquee-elements: 12; */
  /* defined with JavaScript */
  --marquee-elements-displayed: 5;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}

.marquee {
  width: var(--marquee-width);
  height: var(--marquee-height);
  background-color: #111;
  color: #eee;
  overflow: hidden;
  position: relative;
}

.marquee:before, .marquee:after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: "";
  z-index: 1;
}

.marquee:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}

.marquee:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}

.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}

/* .marquee-content:hover {
  animation-play-state: paused;
} */
@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
  }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height)*3/4);
  /* 5rem; */
  white-space: nowrap;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */
  border: 2px solid #eee;
}

@media (max-width: 600px) {
  html {
    font-size: 12px;
  }

  :root {
    --marquee-width: 100vw;
    --marquee-height: 16vh;
    --marquee-elements-displayed: 3;
  }

  .marquee:before, .marquee:after {
    width: 5rem;
  }
}
</style>


