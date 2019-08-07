<template>
    <div id="img">
        {{title}}
    </div>
</template>


<script>
    export default {
            name:'listDetail',
        data(){
          return{
             /*以下方法就是接收父页面传参
             获取id:this.$route.params.id
             获取title:this.$route.params.title,
             */
             title:this.$route.params.queryTitle,
          }
        },
        methods:{
        //这里面可以根据获取到的id进行获取相应数据

        },
        mounted(){
            console.log('123')
        }
    }
</script>
<style lang="less">

</style>


