<template>
  <div id="app">

    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.tabBar"/>
  </div>
</template>

<script>
import {MessageBox} from "lib/messageBox/index.js"

import TabBar from "common/tabBar"
export default {
    name:"App",
    components:{
      TabBar
    },
    created(){
      MessageBox({
        title:"城市定位",
        message:"深圳",
        handleOK:()=>{
          alert("Ok")
        },
        handleCancel:()=>{
           alert("取消")
        }
      });
    }
}
</script>
<style lang="scss">

</style>
