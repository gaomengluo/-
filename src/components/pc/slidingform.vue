<template>
    <div id="slidingform">
        <div class="container">
            <div class="captcha">
                <canvas id="c"></canvas>
                <canvas id="puzzle"></canvas>
                <input id="slider" type="range" value="0" min="0" step="1">
            </div>
        </div>
    </div>
</template>


<script>
const dat = require("dat.gui");
export default {
  name: "slidingform",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let c = document.getElementById("c"),
      ctx = c.getContext("2d"),
      p = document.getElementById("puzzle"),
      pctx = p.getContext("2d"),
      slider = document.getElementById("slider"),
      pos = { x: null, y: null },
      delta = 5,
      s = {
        size: 70,
        refresh: drawCaptcha
      };

    let img = new Image();
    img.onload = () => {
      c.width = img.width;
      c.height = img.height;

      initSettings();
      drawCaptcha();

      slider.addEventListener("input", function() {
        p.style.left = `${this.value}px`;
      });
      slider.addEventListener("change", function() {
        if (Math.abs(pos.x - parseInt(p.style.left)) <= delta) passed();
        else failed();
      });
    };
    img.src =
      "http://www.worldbirdsanctuary.org/wp-content/uploads/resident_eagles.png";

    function passed() {
      c.style.color = "#4caf50";
    }

    function failed() {
      c.style.color = "#ff1744";
    }

    function initSettings() {
      let g = new dat.GUI();
      g.add(s, "size", 50, 80, 1).onChange(drawCaptcha);
      g.add(s, "refresh");
    }

    function drawGhost() {
      ctx.fillStyle = "rgba(255, 255, 255, .5)";
      drawShape(ctx, pos.x, pos.y);
    }

    function drawPuzzle() {
      p.width = s.size;
      p.height = s.size;
      drawShape(pctx);
      pctx.globalCompositeOperation = "source-in";
      pctx.drawImage(
        img,
        pos.x,
        pos.y,
        p.width,
        p.height,
        0,
        0,
        p.width,
        p.height
      );
      p.style.top = `${pos.y}px`;
    }

    function drawShape(ctx, x = 0, y = 0) {
      ctx.beginPath();
      ctx.moveTo(x, y + 0.25 * s.size);
      ctx.lineTo(x + 0.25 * s.size, y + 0.25 * s.size);
      ctx.arc(
        x + 0.5 * s.size,
        y + 0.25 * s.size,
        0.25 * s.size,
        Math.PI,
        false
      );
      ctx.moveTo(x + 0.75 * s.size, y + 0.25 * s.size);
      ctx.lineTo(x + s.size, y + 0.25 * s.size);
      ctx.lineTo(x + s.size, y + s.size);
      ctx.lineTo(x, y + s.size);
      ctx.quadraticCurveTo(
        x + 0.5 * s.size,
        y + 0.75 * s.size,
        x,
        y + 0.5 * s.size
      );
      ctx.lineTo(x, y + 0.25 * s.size);
      ctx.fill();
    }

    function getRandomPosition() {
      pos = {
        x: Math.floor(s.size + (c.width - 2 * s.size) * Math.random()),
        y: Math.floor((c.height - s.size) * Math.random())
      };
    }

    function drawCaptcha() {
      c.style.color = "#000";
      p.style.left = slider.value = 0;
      slider.setAttribute("max", Math.round(img.width - s.size));
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0);
      getRandomPosition();
      drawPuzzle();
      drawGhost();
    }
  }
};
</script>
<style lang="less">
html {
  height: 100%;
}
html body {
  padding: 0;
  margin: 0;
  background: linear-gradient(#1e130c, #9a8478);
  overflow: hidden;
}
html body .property-name,
html body .close-button {
  font-family: "Open Sans", sans-serif;
  text-transform: capitalize;
  font-size: 1em;
}
html body .container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
html body .container .captcha {
  position: relative;
}
html body .container .captcha #c {
  border-radius: 8px;
  box-sizing: border-box;
  color: #000;
  box-shadow: 0 0 6px 1px currentColor;
  transition: color 0.3s;
}
html body .container .captcha #puzzle {
  position: absolute;
  left: 0;
}
html body .container .captcha input {
  position: absolute;
  width: 100%;
  left: 0;
}

</style>


