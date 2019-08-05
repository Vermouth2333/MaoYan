<template>
  <div class="movieWrapper">
    <alley-BScroll ref="alleyscroll">
      <div class="movie_body">
        <div class="movie_item" v-for="(item,index) in comingList" :key="index">
          <div class="movie_item_pic">
            <img :src="item.img | ToImg('128.180')" />
          </div>
          <div class="movie_item_info">
            <h2>{{item.nm}}</h2>
            <p>
              <span>{{item.wish}}</span>人想看
            </p>
            <p>
              主演：
              <span>{{item.star}}</span>
            </p>
            <p>
              <span>{{item.rt}}</span>上映
            </p>
          </div>
          <div
            :class="item.showst==4?'movie_item_btn ticket':'movie_item_btn wsee'"
          >{{item.showst==4?'预售':'想看'}}</div>
        </div>
      </div>
    </alley-BScroll>
  </div>
</template>

<script>
import { movie_coming_api} from "api/movie";
import {mapState} from "vuex";
export default {
  name: "MovieCinema",
  async created() {
    let data = await movie_coming_api(this.cityId); 
    this.comingList = data.data.comingList;
    
  },
   
  data() {
    return {
      comingList: [],
      pageId:-1
    };
  },
 
  computed:{
    ...mapState({
      cityId:state=>state.city.cityId
    })
  },
  mounted(){
     this.$refs.alleyscroll.handlepullingDown(async ()=>{
        let n = parseInt(Math.random()*7);
        let arr = [10,1,20,40,50,55,59]

        let data = await movie_coming_api(arr[n]);
        this.comingList = data.data.comingList;
        sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
        this.$refs.alleyscroll.handlefinishPullDown();
    })


    //上拉加载更多
    this.$refs.alleyscroll.handlepullingUp(async ()=>{
        let n = parseInt(Math.random()*7);
        let arr = [10,1,20,40,50,55,59]
        let data = await movie_coming_api(arr[n]);
        this.comingList =[...this.comingList,...data.data.comingList];
        sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
        this.$refs.alleyscroll.handlefinishPullUp();
    })
  }
};
</script>


<style>
.movieWrapper {
  height: 100%;
  overflow: auto;
}
.wsee {
  background: #faaf00;
}
</style>