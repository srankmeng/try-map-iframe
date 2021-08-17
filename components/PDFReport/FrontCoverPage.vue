<template>
  <div class="report-gradient-bg pdf-layout-page relative">
    <div class="period mt-6">
      <div class="text-center">
        Period
      </div>
      <div class="leading-6 mt-2 text-center">
        {{ formattedPeriods }}
      </div>
    </div>
    <div class="magnetic-logo">
      <img class="logo-blue" src="~static/images/pdf-report/logo-blue.png">
      <img class="logo-color" src="~static/images/pdf-report/logo-color.png">
      <div class="report-text">
        REPORT
      </div>
    </div>
    <div class="bottom-building">
      <img src="~static/images/pdf-report/building.png">
    </div>
    <div class="blue-bg"></div>
  </div>
</template>

<script>
export default {
  props: {
    periods: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formattedPeriods() {
      return this.periods.join(',  ')
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '~assets/styleguides/styleguides';
  .period {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    position: absolute;
    top: 420px;
    left: 380px;
    width: 285px;
  }

  .magnetic-logo {
    position: absolute;
    top: 250px;
    right: 60px;
    text-align: center;

    .logo-blue {
      width: 100px;
      margin: auto;
    }

    .logo-color {
      width: 400px;
    }

    .report-text {
      margin-top: 4px;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 8px;
    }
  }

  .bottom-building {
    z-index: 2;
    position: absolute;
    bottom: 10px;
    left: -210px;

    img {
      width: 970px;
    }
  }

  .blue-bg {
    position: absolute;
    bottom: -290px;
    // top: 0;
    left: 0;
    width: 1000px;
    height: 610px;
    background-color: #132092;
    transform: skewY(30deg);
  }
</style>
