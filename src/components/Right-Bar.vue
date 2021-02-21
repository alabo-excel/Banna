<template>
  <div class="flex w-screen">
    <Dashboard class="w-full" :designText="designText" :designImg="designImg" :designBg="designBg" :designAuthor="designAuthor" :designTitle="designTitle" />
    <div class="shadow-lg p-8 pt-20 h-screen ml-8">
      <div class="mb-3">
        <p>Title:</p>
        <input
          v-model="designTitle"
          type="text"
          placeholder="Enter your article title"
          class="rounded-md p-1"
        />
      </div>
      <div class="my-3">
        <p>Author Name:</p>
        <input
          v-model="designAuthor"
          type="text"
          placeholder="Enter your name"
          class="rounded-md p-1"
        />
      </div>
      <div class="my-3">
        <p>Background Color:</p>
        <input
          v-model="designBg"
          type="text"
          placeholder="eg #FFFFFF"
          class="rounded-md p-1"
        />
      </div>
      <div class="my-3">
        <p>Text Color:</p>
        <input
          v-model="designText"
          type="text"
          placeholder="eg #FFFFFF"
          class="rounded-md p-1"
        />
      </div>
      <div class="my-3">
        <p>Image URL:</p>
        <input v-model="designImg" type="text" class="rounded-md p-1" />
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard-Main";

import { ref } from "vue";
export default {
  components: {
    Dashboard
  },
  setup() {
    const designTitle = ref("Introduction to Git (version control)");
    const designAuthor = ref("John doe");
    const designBg = ref("bg-blue-300");
    const designText = ref("text-white");
    const designImg = ref("https://www.fullstackpython.com/img/logos/git.png");

    return {
      designTitle,
      designBg,
      designAuthor,
      designText,
      designImg
    };
  }
};
</script>

<style scoped>
</style>