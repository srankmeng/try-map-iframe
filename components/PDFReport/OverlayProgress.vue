<template>
  <div wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 flex flex-col items-center justify-center">
    <div v-if="percent == 100 || percent == '100'" class="mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    </div>
    <div v-else class="loader-spinning ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
    </div>
    <h2 class="text-center text-white text-xl font-semibold">
      <span v-if="percent == 100 || percent == '100'">Complete</span>
      <span v-else>{{ percent }}% Loading...</span>
    </h2>
    <p v-if="percent == 100 || percent == '100'" class="w-1/3 text-center text-white">
      <span v-if="saveToStorage == 'true'">
        Report has been saved successfully.
      </span>
      <span v-else>
        Report has been generated successfully.
      </span>
    </p>
    <p v-else class="w-1/3 text-center text-white">
      This may take a while, please don't close this page.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      saveToStorage: this.$route.query.saveToStorage || false,
    }
  },
}
</script>

<style scoped>
.loader-spinning {
	border-top-color: #3498db;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
