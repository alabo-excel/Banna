f<template>
  <div>
    <!-- Header component -->

    <div class="w-full absolute top-0 bg-white">
      <HeaderNav :designName="designName" :download="download" />
    </div>

    <div class="lg:flex">
      <!-- left sidebar component -->

      <LeftBar
        id="leftbar"
        :growTitle="growTitle"
        :watermark="watermark"
        :textLeft="textLeft"
        :textRight="textRight"
        :reduceTitle="reduceTitle"
        :addtopMargin="addtopMargin"
        :reducetopMargin="reducetopMargin"
        :italics="italics"
        :textCenter="textCenter"
      />

      <!-- Design playground -->

      <div class="bg-white mt-24 w-full ounded-2xl workspace">
        <!-- Design card -->

        <div
          id="design"
          :class="designBg, designBorder"
          class="border-8 border-transparent mt-16 overflow-hidden h-80 lg:w-9/12 mx-auto"
        >
          <div class="text-center p-4 font-extrabold ">
            <h1
              id="title"
              class="text-1xl break-normal px-14"
              :class="designText"
            >
              {{ designTitle }}
            </h1>
          </div>
          <div class="m-2 flex justify-evenly" id="images"></div>
          <div class="float-right mr-5 py-4">
            <p v-if="designAuthor === ''"></p>
            <p v-else :class="designText" class="text-sm">
              By {{ designAuthor }}
            </p>
          </div>
          <div v-if="designAuthor === ''"></div>
          <div v-else id="powered" class="flex m-2 relative top-20">
            <img width="15" src="../assets/hashnode.png" alt="" />
            <p :class="designText" class="text-xs pl-1">Powered by Hashnode</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Successfull Modal component -->

    <div id="modal" class="fixed hidden z-10 inset-0 overflow-y-auto">
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
              <div class="mx-auto">
                <span class="material-icons text-6xl my-3 text-green-400"
                  >check_circle</span
                >
              </div>
              <div class="text-center">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Design Downloaded Successfully
                </h3>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="closeModal"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftBar from "../components/Left-Bar";
import HeaderNav from "../components/Header-Nav";
import { ref } from "vue";

export default {
  components: {
    LeftBar,
    HeaderNav
  },
  props: [
    "designTitle",
    "designAuthor",
    "designBorder",
    "designBg",
    "designText"
  ],

  setup() {
    const designName = ref("Untitled");

    // increase font size
    let size = 20;
    const growTitle = e => {
      size++;
      document.getElementById("title").style.fontSize = size + "px";
    };

    // Decrease font size
    const reduceTitle = () => {
      size--;
      document.getElementById("title").style.fontSize = size + "px";
    };

    // hide or show watermark
    const watermark = () => {
      if (document.getElementById("powered").style.display != "flex") {
        document.getElementById("powered").style.display = "flex";
      } else {
        document.getElementById("powered").style.display = "none";
      }
    };

    // text align left
    const textLeft = () => {
      document.getElementById("title").style.textAlign = "left";

      // document.getElementById("title").classList.remove("text-right");
      // document.getElementById("title").classList.add("text-left");
    };

    // text align right
    const textRight = () => {
      document.getElementById("title").style.textAlign = "right";

      // document.getElementById("title").classList.remove("text-left");
      // document.getElementById("title").classList.add("text-right");
    };

    // make text italic
    const italics = () => {
      if (document.getElementById("title").style.fontStyle != "italic") {
        document.getElementById("title").style.fontStyle = "italic";
      } else {
        document.getElementById("title").style.fontStyle = "";
      }
    };

    // download design functionality
    const download = () => {
      var getCanvas;
      var element = document.getElementById("design");
      html2canvas(element, {
        onrendered: function(canvas) {
          // document.getElementById('preview').append(canvas)
          getCanvas = canvas;
          var link = document.createElement("a");
          link.download = designName.value + ".jpg";
          link.href = getCanvas.toDataURL();
          link.click();
        }
      });
      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").classList.add("block");
    };

    // close modal
    const closeModal = () => {
      document.getElementById("modal").classList.remove("block");
      document.getElementById("modal").classList.add("hidden");
    };

    // Add margin top
    let marginTop = 10;
    const addtopMargin = () => {
      marginTop++;
      document.getElementById("title").style.marginTop = marginTop + "px";
    };

    // Reduce margin top
    const reducetopMargin = () => {
      marginTop--;
      document.getElementById("title").style.marginTop = marginTop + "px";
    };

    // Text align center
    const textCenter = () => {
      document.getElementById("title").style.textAlign = "center";
    };

    return {
      growTitle,
      reduceTitle,
      watermark,
      textLeft,
      textRight,
      download,
      designName,
      closeModal,
      addtopMargin,
      reducetopMargin,
      italics,
      textCenter
    };
  }
};
</script>

<style scoped>
.workspace {
  height: 28rem;
}

@media (max-width: 650px) {
  #leftbar {
    display: none;
  }
  .workspace {
    height: 23rem;
  }
}
</style>