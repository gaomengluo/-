<template>
    <div id="img">
      <ul>
            <li class="list" @click="jump(1,'列表1详情')">列表1</li>
            <li class="list" @click="jump(2,'列表2详情')">列表2</li>
            <li class="list" @click="jump(3,'列表3详情')">列表3</li>
        </ul>

    </div>
</template>


<script>
   export default {
        name:'ListView',
        data(){
            return{
                  }
        },
        methods:{
             jump:function(id,title){
             this.$router.push('/list-detail/'+id+'/'+title);
            },
        }
    }
</script>
<style lang="less">

</style>


