<template>
    <div id="loading">
        <div class="wrapper">
            <span class="loading" data-splitting="">Loading</span>
        </div>
        <div class="support">
            <a href="https://twitter.com/DevLoop01" target="_blank">
                <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://codepen.io/dev_loop/" target="_blank">
                <i class="fab fa-codepen"></i>
            </a>
        </div>
    </div>
</template>


<script>
export default {
  name: "loading",
  data() {
    return {};
  },
  methods: {},
  mounted() {
      Splitting();
  }
};
</script>
<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 3rem;
  color: #fff;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
}

.wrapper {
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading .char {
  overflow: hidden;
  color: transparent;
  letter-spacing: 2px;
}
.loading .char:before, .loading .char:after {
  visibility: visible;
  color: #000;
}
.loading .char:before {
  animation: _before 1.8s cubic-bezier(0.9, 0, 0.2, 1) infinite;
  animation-delay: calc( 0.9s + ( 0.1s * ( var(--char-index)) ) );
  transform: translateY(0);
  opacity: 1;
}
.loading .char:after {
  animation: _after 1.8s cubic-bezier(0.9, 0, 0.2, 1) infinite;
  animation-delay: calc( 0.9s + ( 0.1s * ( var(--char-index)) ) );
  transform: translateY(100%);
  opacity: 0;
}

@keyframes _before {
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
@keyframes _after {
  to {
    transform: translate(0);
    opacity: 1;
  }
}
.support {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  display: flex;
}

a {
  margin: 0 20px;
  color: #fff;
  font-size: 2rem;
  transition: all 400ms ease;
}

a:hover {
  color: #222;
}
</style>


