import callApex from '~/plugins/callApex'
import { products, product, topGridReachesAndEyeBalls, mediaReport, mediaNames, mediaNamesWithIds, productById, aud } from '~/mock/product'
import moment from 'moment'

export default {
  getAll({
    searchName,
    contactId,
    startDateStr,
    endDateStr,
    costs,
  }) {
    // default start and end date if not given
    if (!startDateStr || !endDateStr) {
      startDateStr = this.nextPeriod().startDateStr
      endDateStr = this.nextPeriod().endDateStr
    }

    const input = {
      searchName,
      contactId,
      startDateStr,
      endDateStr,
    }

    // default costs filter
    const filter = {
      minCost: 0,
      maxCost: 100000000,
    }

    if (costs && costs.length > 0) {
      filter.minCost = costs[0]
      filter.maxCost = costs[1]
    }

    return callApex(
      'PlanBController.searchMedia',
      products,
      input,
      filter,
    )
  },
  getProductById(productId) {
    return callApex(
      'PlanBController.getProductById',
      productById,
      productId,
    )
  },
  getMedia({
    productId,
    startDateStr,
    endDateStr,
    contactId,
  }) {
    // default start and end date if not given
    if (!startDateStr || !endDateStr) {
      startDateStr = this.nextPeriod().startDateStr
      endDateStr = this.nextPeriod().endDateStr
    }

    return callApex(
      'PlanBController.getMediaWithProductId',
      product,
      {
        productId,
        startDateStr: moment(startDateStr).format('YYYY-MM-DD'),
        endDateStr: moment(endDateStr).format('YYYY-MM-DD'),
        contactId
      },
    )
  },
  getMediaReport({
    productId,
    contactId,
    selectedMonth,
  }) {
    return callApex(
      'PlanBController.getMediaReport',
      mediaReport,
      { productId, contactId, selectedMonth },
    )
  },
  getMediaGridAndEyeballsDuring12Months({
    productId,
    month,
    year,
  }) {
    return callApex(
      'PlanBController.getMediaGridAndEyeballsDuring12Months',
      [topGridReachesAndEyeBalls[Math.floor(Math.random() * topGridReachesAndEyeBalls.length)]],
      productId,
      { month, year },
    )
  },
  getMediaNames(searchName) {
    return callApex(
      'PlanBController.searchMediaName',
      mediaNames,
      searchName,
    )
  },
  getMediaNameList() {
    return callApex(
      'PlanBController.getPackageNameList',
      mediaNamesWithIds,
      moment().format('YYYY-MM-DD'),
    )
  },
  getAudienceWithProductId(productId, partitionMonth) {
    return callApex(
      'PlanBController.getAudienceWithProductId',
      aud,
      productId,
      partitionMonth,
    )
  },
  // find the next period (half month) based on the current date
  nextPeriod() {
    const endDayInMonth = moment().daysInMonth()
    const currentDay = +moment().format('D')

    const firstHalfDaysInMonth = []
    for (let i = 0; i <= 14; i++) {
      firstHalfDaysInMonth[i] = i + 1
    }

    const secondHalfDaysInMonth = []
    for (let i = 0; i < endDayInMonth - 15; i++) {
      secondHalfDaysInMonth[i] = i + 16
    }

    let startDateStr
    let endDateStr

    if (firstHalfDaysInMonth.includes(currentDay)) {
      const currentMonthAndYear = moment().format('YYYY-MM')
      startDateStr = `${currentMonthAndYear}-15`
      endDateStr = `${currentMonthAndYear}-${endDayInMonth}`
    } else if (secondHalfDaysInMonth.includes(currentDay)) {
      const nextMonthAndYear = moment().add(1, 'months').format('YYYY-MM')
      startDateStr = `${nextMonthAndYear}-01`
      endDateStr = `${nextMonthAndYear}-15`
    }

    return { startDateStr, endDateStr }
  }
}
