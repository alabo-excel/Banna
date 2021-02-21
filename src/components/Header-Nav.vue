<template>
  <div class="hello shadow-lg">
    <div class="flex justify-between p-3 px-9">
      <h1 class="font-extrabold">Banna</h1>
      <div class="flex">
        <input
          v-model="designName"
          type="text"
          class="bg-transparent w-20 border-0"
        />
        <span class="material-icons">keyboard_arrow_down</span>
      </div>
      <div @click="download">
        <span class="material-icons hover:bg-gray-300 p-1 rounded-full"
          >download</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ["download", "designName"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
