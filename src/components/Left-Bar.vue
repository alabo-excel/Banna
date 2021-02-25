<template>
<!-- left sidebar -->
  <div @click="addImg" class="p-8 h-screen pt-20 rounded-md shadow-lg mr-8">
    <div class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >wallpaper</span
      >
    </div>
    <div @click="growTitle" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >text_format</span
      >
    </div>
    <div @click="reduceTitle" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >text_format</span
      >
    </div>
    <div @click="textLeft" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >keyboard_arrow_left</span
      >
    </div>
    <div @click="textRight" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >keyboard_arrow_right</span
      >
    </div>
    <div  @click="addtopMargin" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >margin</span
      >
    </div>
    <div @click="reducetopMargin" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >padding</span
      >
    </div>
    <div @click="italics" class="my-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >format_italic</span
      >
    </div>
    <div @click="watermark" class="mt-3">
      <span class="material-icons hover:bg-gray-300 rounded-full p-1"
        >highlight</span
      >
    </div>
  </div>
</template>

<script>

export default {
  props: ['growTitle', 'reducetopMargin', 'addtopMargin', 'reduceTitle', 'watermark', 'textLeft', 'textRight', 'italics', 'addImg'],

};
</script>

<style scoped>
</style>