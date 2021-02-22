<template>
  <div class="lg:flex w-screen">
    <Dashboard
      class="w-full"
      :designText="designText"
      :designBorder="designBorder"
      :designBg="designBg"
      :designAuthor="designAuthor"
      :designTitle="designTitle"
    />
    <div class="rightbar shadow-lg p-8 pt-20 h-screen ml-8">
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
          class="rounded-md p-1"
        />
      </div>
      <div class="my-3">
        <p>Border Color:</p>
        <input
          v-model="designBorder"
          type="text"
          class="rounded-md p-1"
        />
      </div>
      <div class="my-3">
        <p>Text Color:</p>
        <input
          v-model="designText"
          type="text"
          class="rounded-md p-1"
        />
      </div>
      <!-- <div class="my-3">
        <p>Image URL:</p>
        <input
          type="file"
          accept="image/*"
          class="rounded-md p-1"
          @change="designImg(e)"
        />
      </div> -->
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
    const designBorder = ref('border-blue-500')

    // const designImg = (e) => {
    //   var image = document.getElementById("output");
    //   image.src = URL.createObjectURL(event.target.files[0]);
    //   console.log(image)
    // };

    return {
      designTitle,
      designBg,
      designAuthor,
      designText,
      designBorder
    };
  }
};
</script>

<style scoped>
@media (max-width: 650px) {
  .rightbar{
    display: none;
  }
}
</style>