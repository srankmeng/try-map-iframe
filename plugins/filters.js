import Vue from 'vue'

Vue.filter('millionFormat', (value) => {
  if (!value) {
    return
  }

  const units = ['M', 'B', 'T', 'Q', 'Q', 'S']
  const unit = Math.floor((value / 1.0e+1).toFixed(0).toString().length)
  const r = unit%3
  const x =  Math.abs(Number(value))/Number('1.0e+'+(unit-r)).toFixed(1)

  return x.toFixed(1)+ ' ' + units[Math.floor(unit / 3) - 2]
})

Vue.filter('currencyFormat', (value) => {
  if (!value) {
    return
  }

  return (value + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
})

Vue.filter('removeAmpUrl', (value) => {
  if (!value) {
    return
  }

  return value.replace(/&amp;/g, '&')
})
