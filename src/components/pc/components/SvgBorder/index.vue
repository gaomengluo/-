<template>
<svg 
        class="svg-border" 
        :viewBox="viewBox" 
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="2">
        <clipPath :id="clipPathId">
            <path :d="path" />
        </clipPath>
        <path 
            :clip-path="'url(#' + clipPathId + ')'" 
            :d="path" 
            fill="none"
            pathLength="100" />
    </svg>
</template>

<script>
 let svgBorderInstance = 0;
export default {
  name: 'SvgBorder',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: function() {
        return {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px',
          background: '#e7eaf1'
        }
      }
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
data() {
        svgBorderInstance++;
        return {
            rect: {},
            clipPathId: `svg-border-cp-${svgBorderInstance}`,
        };
    },
   mounted() {
        this.$nextTick(this.getRect.bind(this));

        ['load', 'DOMContentLoaded', 'resize', 'orientationchange'].map(evName => (window.addEventListener(evName, this.getRect.bind(this), 1000)));
    },
  methods: {
        getRect() {
            this.rect = (this.$el && this.$el.parentNode && this.$el.parentNode.getBoundingClientRect()) || {};
        },
    },
    computed: {
        width() {
            const { width = 0 } = this.rect;
            return Math.round(width);
        },
        height() {
            const { height = 0 } = this.rect;
            return Math.round(height);
        },
        viewBox() {
            return `0 0 ${this.width} ${this.height}`;
        },
        path() {
            const { width: w, height: h } = this;

            return [
                `M ${w/2} ${h}`,
                `h ${(w-h)/2}`,
                `a ${h/2} ${h/2} 0 1 0 0 ${h*-1}`,
                `h ${(w-h)*-1}`,
                `a ${h/2} ${h/2} 0 1 0 0 ${h}`,
                `h ${(w-h)/2}`,
            ].join(' ');
        },
    },
}
</script>

<style scoped></style>