<template>
  <div class="dashboard h-screen">
    <RightBar />
    <FooterNav />
  </div>
</template>

<script>
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
.dashboard {
  background-color: #f3f2f2;
  overflow-x: hidden;
}
</style>
