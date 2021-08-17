<template>
  <div class="report-gradient-bg pdf-layout-page relative">
    <div class="top-logo">
      <img src="~static/images/pdf-report/logo-color.png">
      <div class="report-text">REPORT</div>
    </div>
    <div v-if="month" class="absolute top-12 left-60 text-xl">
      {{ month }}
    </div>
    <div class="px-4 pt-32">
      <slot/>
    </div>
    <div class="bottom-logo">
      <img src="~static/images/pdf-report/bottom-logo.png">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="scss" scoped>
  // .default-page {
  //   // width: 20px;
  //   // background-image: url("~static/images/pdf-report/light-blue-background.png");
  //   // background: rgb(214,229,248);
  //   // background: linear-gradient(0deg, rgba(214,229,248,1) 50%, rgba(237,245,255,1) 100%);
  // }
</style>
