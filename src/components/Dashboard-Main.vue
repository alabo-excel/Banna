<template>
  <div>
    <div class="w-full absolute top-0 bg-white">
      <HeaderNav :designName="designName" :download="download" />
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
          :class="designBg, designBorder"
          class="border-8 border-transparent mt-16  h-80 w-9/12 mx-auto"
        >
          <div class="text-center p-4 font-extrabold ">
            <h1 id="title" class="text-1xl mt-28 break-all" :class="designText">
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
    <!-- <div id="preview"></div> -->
    <img src="" class="img" />
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
    };

    return {
      growTitle,
      watermark,
      textLeft,
      textRight,
      underline,
      italics,
      download,
      designName
    };
  }
};
</script>

<style scoped>
.workspace {
  height: 28rem;
}
</style>