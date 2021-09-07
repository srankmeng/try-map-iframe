<template>
  <div class="relative">
    <ConfidentialBar />
    <div class="back-cover-page pdf-layout-page relative">
      <div class="center-logo">
        <img src="~static/images/pdf-report/logo-white.png">
        <div class="media-text">
          media
        </div>
      </div>
      <div class="social">
        <img src="~static/images/pdf-report/social.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import '~assets/styleguides/styleguides';
  .back-cover-page {
    background-color: #002965;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-image: url("~static/images/pdf-report/back-cover-page.png");

    .center-logo {
      img {
        width: 200px;
      }

      .media-text {
        text-align: right;
        font-weight: 600;
        color: #17beec;
        font-size: 16px;
        padding-right: 2px;
      }
    }

    .social {
      position: absolute;
      bottom: 30px;

      img {
        width: 400px;
      }
    }
  }
</style>
