<template>
    <div id="skewhover">
        <div class="container">
            <div class="box">
                <div class="content">
                    <h2>Box One</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
                </div>
            </div>
            <div class="box">
                <div class="content">
                    <h2>Box Two</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
                </div>
            </div>
            <div class="box">
                <div class="content">
                    <h2>Box Three</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "ListView",
  data() {
    return {};
  },
  methods: {
    jump: function(id, title) {
      this.$router.push("/list-detail/" + id + "/" + title);
    }
  }
};
</script>
<style lang="less">

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #001628;
}

.container {
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 70px;
}

.container .box::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  z-index: -1;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(2deg, 3deg);
  transition: 0.5s;
}

.container .box:hover:before {
  transform: skew(-2deg, -3deg);
}

.container .box {
  position: relative;
  color: #fff;
  height: 400px;
  /*   border: 1px solid #fff; */
  display: flex;
  align-content: center;
  align-items: center;
  background-color: #001628;
}

.container .box:nth-child(1):before {
  background: linear-gradient(to right, #00c3ff, #ffff1c);
}

.container .box:nth-child(2):before {
  background: linear-gradient(to right, #ef32d9, #89fffd);
}

.container .box:nth-child(3):before {
  background: linear-gradient(to right, #e96443, #904e95);
}

.content {
  padding: 0 40px;
  position: relative;
}

.content h2 {
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 30px;
}

.content p {
  letter-spacing: 1px;
  font-size: 18px;
}
</style>


