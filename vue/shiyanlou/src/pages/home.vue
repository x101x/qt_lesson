<template>
  <div id="home_page">
    <NavigationBar />
    <MainNavigation />
    <LouPlus />
    <Boutique />
    <RecentlyRecommendCurse />
    <CloudComputeBigDataCourse />
    <TrainingCourse />
    <LearningPath />
    <SiteDescription />
  </div>
</template>

<script>
import NavigationBar from "@/components/home_page/navigation-bar";
import MainNavigation from "@/components/home_page/main-navigation";
import LouPlus from "@/components/home_page/lou-plus";
import Boutique from "@/components/home_page/boutique";
import RecentlyRecommendCurse from "@/components/home_page/recently-recommend-curse";
import CloudComputeBigDataCourse from "@/components/home_page/cloud-compute-big-data-course";
import TrainingCourse from "@/components/home_page/training-course";
import LearningPath from "@/components/home_page/learning-path";
import SiteDescription from "@/components/home_page/site-description";
export default {
  data() {
    return {};
  },
  components: {
    NavigationBar,
    MainNavigation,
    LouPlus,
    Boutique,
    RecentlyRecommendCurse,
    CloudComputeBigDataCourse,
    TrainingCourse,
    LearningPath,
    SiteDescription
  }
};
</script>

<style scoped>
</style>
