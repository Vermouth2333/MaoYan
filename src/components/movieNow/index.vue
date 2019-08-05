<template>
  <div class="movieWrapper">
    <alley-BScroll ref="alleyscroll">
      <div class="movie_body">
        <div
          class="movie_item"
          v-for="(item,index) in movieList"
          :key="index"
          @click="handleclick()"
        >
          <div class="movie_item_pic">
            <img :src="item.img |ToImg('128.180')" />
          </div>
          <div class="movie_item_info">
            <h2>{{item.nm}}</h2>
            <p>
              观众评:
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>
              主演：
              <span>{{item.star}}</span>
            </p>
            <p>
              <span>{{item.showInfo}}</span>
            </p>
          </div>
          <div
            :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'"
          >{{item.globalReleased?'购票':'预售'}}</div>
        </div>
      </div>
    </alley-BScroll>
  </div>
</template>

<script>
import { movie_now_api } from "api/movie";
import {mapState} from "vuex";
export default {
  name: "MovieNow",
  async created() {
    if(!sessionStorage.getItem("movieList")){
        let data = await movie_now_api(this.cityId);
        this.movieList = data.data.movieList;
        sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
    }
    
  },
  async activated(){  
      if(this.pageId !=this.cityId){
          let data = await movie_now_api(this.cityId);
          this.movieList = data.data.movieList;
          sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
          this.pageId = this.cityId;
      }    
  },
  computed:{
    ...mapState({
      cityId:state=>state.city.cityId
    })
  },
  data() {
    return {
      movieList: JSON.parse(sessionStorage.getItem("movieList"))||[],
      pageId:-1
    };
  },
  mounted(){
    this.$refs.alleyscroll.handlepullingDown(async ()=>{
        let n = parseInt(Math.random()*7);
        let arr = [10,1,20,40,50,55,59]



        let data = await movie_now_api(arr[n]);
        this.movieList = data.data.movieList;
        sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
        this.$refs.alleyscroll.handlefinishPullDown();
    })


    //上拉加载更多
    this.$refs.alleyscroll.handlepullingUp(async ()=>{
        let n = parseInt(Math.random()*7);
        let arr = [10,1,20,40,50,55,59]
        let data = await movie_now_api(arr[n]);
        this.movieList = [...this.movieList,...data.data.movieList];
        sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
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
</style>