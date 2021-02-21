<template>
  <div>
    <div class="w-full absolute top-0 bg-white">
      <HeaderNav :download="download" />
    </div>
    <div class="flex">
      <LeftBar
        :growTitle="growTitle"
        :watermark="watermark"
        :textLeft="textLeft"
        :textRight="textRight"
        :underline="underline"
        :italics="italics"
      />
      <div class="bg-white mt-20 w-full ounded-2xl workspace">
        <div
          id="design"
          :class="designBg"
          class="border-2 border-transparent hover:border-blue-500 mt-16  h-80 w-9/12 mx-auto"
        >
          <div class="text-center p-4 font-extrabold ">
            <h1 id="title" class="text-1xl " :class="designText">
              {{ designTitle }}
            </h1>
          </div>
          <div class="m-2">
            <img
              id="img1"
              :src="designImg"
              class="mx-auto"
              width="400"
              height="450"
              alt="img"
            />
          </div>
          <div class="float-right mr-5">
            <p :class="designText" class="text-sm">By {{ designAuthor }}</p>
          </div>
          <div id="powered" class="flex m-2 mt-10">
            <img width="15" src="../assets/hashnode.png" alt="" />
            <p class="text-xs pl-1">Powered by Hashnode</p>
          </div>
        </div>
      </div>
    </div>
    <div id="preview"></div>
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
  props: ["designTitle", "designAuthor", "designImg", "designBg", "designText"],

  setup() {
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
          var getCanvas;

    const download = () => {
      var element = document.getElementById("design");
      html2canvas(element, {
        onrendered: function(canvas) {
          document.getElementById("preview").append(canvas);
          getCanvas = canvas;
        }
      });
    };
    return {
      growTitle,
      watermark,
      textLeft,
      textRight,
      underline,
      italics,
      download
    };
  }
};
</script>

<style scoped>
.workspace {
  height: 28rem;
}
</style>