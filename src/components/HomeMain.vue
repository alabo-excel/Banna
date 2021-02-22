<template>
  <!-- home page component -->

  <div class="lg:flex mt-24">
    <div
      class="bg-gray-100 absolute w-2/12 top-40 lg:p-44 rounded-full opacity-25 lg:left-12"
    ></div>
    <div class="lg:p-28 p-8 lg:w-6/12 z-10">
      <h1 class=" text-4xl">
        Banna
      </h1>
      <p class="">
        Design great customizable Cover Photos for your Hashnode Articles in
        three simple steps
      </p>
      <div class="z-10">
        <router-link to="/dashboard">
          <div
            class="bg-gray-200 lg:mr-60 text-center p-3 rounded-md text-sm mt-10"
          >
            <p>GET STARTED</p>
          </div>
        </router-link>
      </div>

      <div
        class="bg-gray-100 absolute w-2/12 top-18 lg:p-28 p-24 rounded-full opacity-75 lg:left-64"
      ></div>
      <div
        class="bg-gray-100 absolute w-1/12 top-20 p-16 rounded-full opacity-50 lg:left-56"
      ></div>
    </div>
    <div class="w-6/12 p-28">
      <img src="../assets/design.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>