<template>
  <div class="divided-page pdf-layout-page relative">
    <div class="top-white-logo">
      <img src="~static/images/pdf-report/logo-color-white.png" />
      <div class="report-text">
        REPORT
      </div>
    </div>
    <div class="heading">
      <div class="month-number">
        {{ index }}
        <div class="border"></div>
      </div>
      <div class="month-name">
        {{ month }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scope>
  @import '~assets/styleguides/styleguides';
  .divided-page {
    background-color: #132092;
    display: flex;
    align-items: center;
    justify-content: center;

    .top-white-logo {
      position: absolute;
      top: 0;
      width: 200px;
      top: 50px;

      .report-text {
        color: white;
        letter-spacing: 4px;
        text-align: center;
        margin-top: 2px;
        font-size: 16px;
        font-weight: bold;
      }
    }

    .heading {
      text-align: center;
      color: white;
      font-size: 40px;

      .month-number {
        font-weight: 700;

        .border {
          width: 40px;
          margin: 0 auto;
          height: 5px;
          background: $color-chart-orange-1;
        }
      }

      .month-name {
        margin-top: 6px;
        font-weight: 400;
      }
    }
  }
</style>
