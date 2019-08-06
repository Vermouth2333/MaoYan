<template>
    <div class="messageBox">
       <div class="messageBox_top">
           <div>{{title}}</div>
           <v-touch class="close" tag="div" @tap="handleClose">x</v-touch>
       </div>
       <div class="wrapper">
           <div class="content">{{message}}</div>
           <div class="btn">
               <v-touch tag="button" @tap="handleTrue">确认</v-touch>
               <v-touch tag="button" @tap="handleFalse">关闭</v-touch>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"MessageBox"
}
</script>

<style scoped>
    .messageBox{
        width: 5rem;
        height:4rem ;
        display: flex;
        box-shadow: 0px 3px 100px #ccc;
        background: #fff;
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index:11;
        flex-direction: column;
    }
    .messageBox_top{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .3rem;
        font-size:.3rem;
        border-bottom: 1px solid #ccc;
        background: #F8F8F8;
    }

    .close{
        font-size:.4rem;
    }

    .wrapper{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .wrapper .btn{
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
     .wrapper .btn button{
         width: 1.6rem;
         height: .6rem;
         border:0;
         background: #1E9FFF;
         color:#fff;
         font-size:.26rem;
     }
     .wrapper .btn button:nth-child(1){
         margin-right: .1rem;
     }
     .wrapper .content{
         flex:1;
         text-align: center;
         line-height: 2rem;
         font-size:.3rem;
     }
</style>