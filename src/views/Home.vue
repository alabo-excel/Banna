<template>
  <div class="home h-screen">
    <!-- <HeaderNav /> -->
    <div class="flex"> 
      <!-- <LeftBar /> -->
      <!-- <Dashboard /> -->
      <RightBar />
    </div>
    <FooterNav />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "../components/Header-Nav";
import FooterNav from "../components/Footer-Nav";
import Dashboard from "../components/Dashboard-Main";
import LeftBar from "../components/Left-Bar";
import RightBar from "../components/Right-Bar";

export default {
  name: "Home",
  components: {
    HeaderNav,
    FooterNav,
    Dashboard,
    LeftBar,
    RightBar
  }
};
</script>
<style scoped>
  .home{
      background-color: #F3F2F2;
  }
</style>
