<template>
  <!-- dashboard header component -->

  <div class="hello shadow-lg">
    <div class="flex justify-between p-1 pl-4 pr-8">
      <img src="../assets/logo.png" height="50" width="60" alt="" />
      <div class="flex">
        <input
          v-model="designName"
          type="text"
          class="bg-transparent w-20 border-0"
        />
        <span class="my-auto material-icons">keyboard_arrow_down</span>
      </div>
      <div
        @click="download"
        class="flex my-auto hover:bg-gray-300 p-2 rounded-md"
      >
        <span class="material-icons ">download</span>
        <p class="my-auto">Download</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ["download", "designName"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
