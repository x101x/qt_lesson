<template>
  <div id="app">
    <Second :second="second" />
    <Minute />
    <Hour />
    <Apm />
    <Week />
    <Day />
    <Mouth />
  </div>
</template>

<script>
// @=src alisa 短链接
import Second from "@/components/Second";
import Minute from "@/components/Minute";
import Hour from "@/components/Hour";
import Apm from "@/components/Apm";
import Week from "@/components/Week";
import Day from "@/components/Day";
import Mouth from "@/components/Mouth";
// import Second from '@/components/Second'

export default {
  name: "App",
  components: {
    Second,
    Minute,
    Hour,
    Apm,
    Week,
    Day,
    Mouth
  },
  data() {
    return {
      second:''
    }
  },
  methods:{
start(){
    setInterval(()=>{
      let date = new Date();
      this.second =date.getSeconds();
    },1000)
  }
  },
  
  created(){
  this.start();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
