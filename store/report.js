export const state = () => ({
  mapLoadedCount: 0,
  generatingImage: 0,
  imageGeneratedCount: 0
});

export const getters = {
  mapLoadedCount: state => state.mapLoadedCount
};

export const mutations = {
  mapLoaded(state) {
    state.mapLoadedCount++;
  },
  generateChartImage(state) {
    state.generatingImage++;
  },
  chartImageGenerated(state) {
    state.imageGeneratedCount++;
  },
  resetMapLoadedCount(state) {
    state.mapLoadedCount = 0;
  }
};
