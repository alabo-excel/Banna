<template>
  <div class="lg:flex w-screen">
    <!-- Welcome modal -->

    <div id="modal1" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-900 opacity-80"></div>
        </div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="">
              <div class="text-center">
                <h3
                  class="text-lg leading-6 mb-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Welcome
                </h3>
              </div>
              <div>
                <div class="m-2">
                  <input
                    class="w-full border-2 border-gray-200 p-1 rounded-md"
                    type="text"
                    v-model="designTitle"
                    placeholder="Enter your article title here"
                  />
                </div>
                <div class="m-2">
                  <input
                    class="w-full border-2 border-gray-200 p-1 rounded-md"
                    type="text"
                    placeholder="Enter author name here"
                    v-model="designAuthor"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="closeModal"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- dashboard component -->

    <Dashboard
      class="w-full"
      :designText="designText"
      :designBorder="designBorder"
      :designBg="designBg"
      :designAuthor="designAuthor"
      :designTitle="designTitle"
      :designImg="designImg"
    />

    <!-- Right sidebar component -->

    <div class="rightbar shadow-lg p-8 pt-20 h-screen ml-8 w-80">
      <div class="my-4">
        <p>Title:</p>
        <input
          v-model="designTitle"
          type="text"
          placeholder="Enter your article title"
          class="rounded-md p-1 w-full border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div class="my-4">
        <p>Author Name:</p>
        <input
          v-model="designAuthor"
          type="text"
          placeholder="Enter your name"
          class="rounded-md p-1 w-full border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div class="my-4">
        <p>Background Color:</p>
        <input
          v-model="designBg"
          type="text"
          placeholder="Eg(bg-blue-300)"
          class="rounded-md w-full p-1 border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div class="my-4">
        <p>Border Color:</p>
        <input
          v-model="designBorder"
          type="text"
          placeholder="eg(border-blue-500)"
          class="rounded-md w-full p-1 border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div class="my-4">
        <p>Text Color:</p>
        <input
          v-model="designText"
          type="text"
          placeholder="text-white"
          class="rounded-md w-full p-1 border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div class="my-3">
        <p>Image URL:</p>
        <input
          type="file"
          accept="image/*"
          class="rounded-md p-1"
          @change="designImg(e)"
        />
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
    const designTitle = ref("");
    const designAuthor = ref("");
    const designBg = ref("");
    const designText = ref("");
    const designBorder = ref("");

    const designImg = e => {
      const newImg = new Image();
      newImg.width = "80";
      document.getElementById("images").appendChild(newImg);
      newImg.src = URL.createObjectURL(event.target.files[0]);
    };

    const closeModal = () => {
      document.getElementById("modal1").classList.remove("block");
      document.getElementById("modal1").classList.add("hidden");
    };

    return {
      designTitle,
      designBg,
      designAuthor,
      designText,
      designBorder,
      closeModal,
      designImg
    };
  }
};
</script>

<style scoped>
@media (max-width: 650px) {
  .rightbar {
    display: none;
  }
}
</style>