<template>
  <div class="about">
    <MainNav />
    <HomeMain />
    <FooterNav />
  </div>
</template>
<script>
import HomeMain from "../components/HomeMain";
import FooterNav from "../components/Footer-Nav";
import MainNav from "../components/Main-Nav";

export default {
  components: {
    HomeMain,
    FooterNav,
    MainNav
  }
};
</script>