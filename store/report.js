export const state = () => ({
  mapLoadedCount: 0,
})

export const getters = {
  mapLoadedCount: (state) => state.mapLoadedCount,
}

export const mutations = {
  mapLoaded(state) {
    state.mapLoadedCount++
  },
  resetMapLoadedCount(state) {
    state.mapLoadedCount = 0
  },
}
