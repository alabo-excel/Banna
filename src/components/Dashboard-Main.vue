<template>
  <div>
    <div class="w-full absolute top-0 bg-white">
      <HeaderNav :designName="designName" :download="download" />
    </div>
    <div class="lg:flex">
      <LeftBar id="leftbar"
        :growTitle="growTitle"
        :watermark="watermark"
        :textLeft="textLeft"
        :textRight="textRight"
        :underline="underline"
        :italics="italics"
      />
      <div class="bg-white mt-24 w-full ounded-2xl workspace">
        <div
          id="design"
          :class="designBg, designBorder"
          class="border-8 border-transparent mt-16 h-80 lg:w-9/12 mx-auto"
        >
          <div class="text-center p-4 font-extrabold ">
            <h1 id="title" class="text-1xl mt-20 px-14 break-all" :class="designText">
              {{ designTitle }}
            </h1>
          </div>
          <!-- <div class="m-2">
            <img id="output" class="mx-auto" width="400" alt="img" />
          </div> -->
          <div class="float-right mr-5 py-10">
            <p :class="designText" class="text-sm">By {{ designAuthor }}</p>
          </div>
          <div id="powered" class="flex m-2 relative top-20">
            <img width="15" src="../assets/hashnode.png" alt="" />
            <p class="text-xs pl-1">Powered by Hashnode</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal component -->
<div id="modal" class="fixed hidden z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
    </div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="">
          <div class="mx-auto">
            <span class="material-icons text-6xl my-3 text-green-400">check_circle</span>
          </div>
          <div class="text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Design Downloaded Successfully
            </h3>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click="closeModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
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
  props: ["designTitle", "designAuthor", "designBorder", "designBg", "designText"],

  setup() {
    const designName = ref("Untitled");
    const growTitle = e => {
      if (document.getElementById("title").classList[0] === "text-1xl") {
        document.getElementById("title").classList.remove("text-1xl");
        document.getElementById("title").classList.add("text-2xl");
      } else if (document.getElementById("title").classList[0] === "text-2xl") {
        document.getElementById("title").classList.remove("text-2xl");
        document.getElementById("title").classList.add("text-3xl");
      } else {
        document.getElementById("title").classList.remove("text-3xl");
        document.getElementById("title").classList.add("text-4xl");
      }
    };
    const watermark = () => {
      if (document.getElementById("powered").style.display != "flex") {
        document.getElementById("powered").style.display = "flex";
      } else {
        document.getElementById("powered").style.display = "none";
      }
    };
    const textLeft = () => {
      document.getElementById("title").classList.remove("text-right");
      document.getElementById("title").classList.add("text-left");
    };
    const textRight = () => {
      document.getElementById("title").classList.remove("text-left");
      document.getElementById("title").classList.add("text-right");
    };
    const underline = () => {
      console.log();

      if (document.getElementById("title").classList[2] === "underline") {
        document.getElementById("title").classList.remove("underline");
      } else {
        document.getElementById("title").classList.add("underline");
      }
    };
    const italics = () => {
      if (document.getElementById("title").classList[2] === "italic") {
        document.getElementById("title").classList.remove("italic");
      } else {
        document.getElementById("title").classList.add("italic");
      }
    };
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
      document.getElementById('modal').classList.remove('hidden')
      document.getElementById('modal').classList.add('block')

    };
    const closeModal = () => {
            document.getElementById('modal').classList.remove('block')
      document.getElementById('modal').classList.add('hidden')
    }

    return {
      growTitle,
      watermark,
      textLeft,
      textRight,
      underline,
      italics,
      download,
      designName,
      closeModal
    };
  }
};
</script>

<style scoped>
.workspace {
  height: 28rem;
}
@media (max-width: 650px) {
  #leftbar{
    display: none;
  }
  .workspace {
  height: 23rem;
}
}
</style>