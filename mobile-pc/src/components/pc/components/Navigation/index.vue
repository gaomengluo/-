<template>
    <div id="Navigation">
        <nav class="nav">
        <a
            v-for="({url, label}, index) in links" 
            :href="url" class="nav-item" :class="{'is-active': active === index}"
            @click.prevent="active = index">
            <SvgBorder></SvgBorder>
            <SvgBorder></SvgBorder>
            {{label}}
        </a>
    </nav>
    </div>
    
</template>


<script>
import SvgBorder from "../SvgBorder";
export default {
 data() {
        return { active: null };
    },
    props: {
        links: Array,
    },
  components: {
    SvgBorder
  },

  mounted() {
    setTimeout(() => (this.active = 0), 1000);
  }
};
</script>


<style scoped>

</style>



