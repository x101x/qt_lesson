<template>
  <div id="app">
    <transition :name="transitionName">
    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName:'slide-left'
    }
  },
  watch: {
    $route(to,from) {
      // console.log(to,from);
      if(to.meta.index>from.meta.index){
        this.transitionName = 'slide-left'
      }else if(to.meta.index<from.meta.index){
        this.transitionName = 'slide-right'
      }else {
        this.transitionName = ''
      }
      
    }
  }
}
</script>

<style scope>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active{
        height: 100%;
        will-change: transform;
        transition: all 500ms;
        position: absolute;
        backface-visibility: hidden;
    }
    .slide-right-enter{
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active{
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter{
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active{
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }


</style>
