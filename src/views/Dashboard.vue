<template>
  <div class="home h-screen">
    <RightBar />
    <FooterNav />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from "../components/Footer-Nav";
import RightBar from "../components/Right-Bar";

export default {
  name: "Home",
  components: {
    FooterNav,
    RightBar
  }
};
</script>
<style scoped>
.home {
  background-color: #f3f2f2;
}
</style>
