import * as gmapCoordinates from '@/constants/gmap-coordinates'
import moment from 'moment'

export const report = {
  Price: {
    'CUS': 'Rate_Card_Price__c',
    'Agency (ตัวแทนโฆษณา)': 'Agency_Rate_Price__c',
    'Big Agency': 'Big_Agency_Rate_Price__c',
  },
  CPMNumber: {
    'CUS': 'CPME_Ratecard__c',
    'Agency (ตัวแทนโฆษณา)': 'CPME_Agency__c',
    'Big Agency': 'CPME_Group_M__c',
  },
  CPRNumber: {
    'CUS': 'CPGR_Ratecard__c',
    'Agency (ตัวแทนโฆษณา)': 'CPGR_Agency__c',
    'Big Agency': 'CPGR_Group_M__c',
  },
  setAges(mediaReport) {
    const ages = []

    ages.push({ name: '< 22 yr', maleValue: mediaReport.Percent_unique_visitors_male_less_than22__c, femaleValue: mediaReport.Percent_unique_visitors_female_less_than__c })
    ages.push({ name: '22 - 25 yr', maleValue: mediaReport.Percent_unique_visitors_male_22_to_25yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_22_to_25y__c })
    ages.push({ name: '26 - 30 yr', maleValue: mediaReport.Percent_unique_visitors_male_26_to_30yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_26_to_30y__c })
    ages.push({ name: '31 - 35 yr', maleValue: mediaReport.Percent_unique_visitors_male_31_to_35yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_31_to_35y__c })
    ages.push({ name: '36 - 40 yr', maleValue: mediaReport.Percent_unique_visitors_male_36_to_40yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_36_to_40y__c })
    ages.push({ name: '41 - 45 yr', maleValue: mediaReport.Percent_unique_visitors_male_41_to_45yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_41_to_45y__c })
    ages.push({ name: '46 - 50 yr', maleValue: mediaReport.Percent_unique_visitors_male_46_to_50yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_46_to_50y__c })
    ages.push({ name: '51 - 55 yr', maleValue: mediaReport.Percent_unique_visitors_male_51_to_55yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_51_to_55y__c })
    ages.push({ name: '56 - 60 yr', maleValue: mediaReport.Percent_unique_visitors_male_56_to_60yr__c, femaleValue: mediaReport.Percent_unique_visitors_female_56_to_60y__c })
    ages.push({ name: '> 60 yr', maleValue: mediaReport.Percent_unique_visitors_male_more_than60__c, femaleValue: mediaReport.Percent_unique_visitors_female_more_than__c })

    return ages
  },
  setTopGridReachesAndEyeBalls(topGridReachesAndEyeBalls) {
    const topGridReachesAndEyeBallsChartData = {
      labels: [],
      datasets: [
        { data: [] },
        { data: [] },
      ],
    }

    if (topGridReachesAndEyeBalls.length > 0) {
      topGridReachesAndEyeBalls.forEach((topGridReachAndEyeBall) => {
        const monthYear = moment(topGridReachAndEyeBall.Partition_month__c)

        topGridReachesAndEyeBallsChartData.labels.push(monthYear.format('MMM YYYY'))
        topGridReachesAndEyeBallsChartData.datasets[0].data.push(topGridReachAndEyeBall.Reach__c)
        topGridReachesAndEyeBallsChartData.datasets[1].data.push(topGridReachAndEyeBall.Total_eyeballs__c)
      })
    }

    return topGridReachesAndEyeBallsChartData
  },
  setVisitingFrequency(mediaReport) {
    const visitingFrequency = [
      mediaReport.Percent_occasional_in_month__c,
      mediaReport.Percent_light_in_month__c,
      mediaReport.Percent_medium_in_month__c,
      mediaReport.Percent_heavy_in_month__c
    ]

    const visitingFrequencyChartData = {
      labels: ['Occasional visitor', 'Light visiting', 'Medium visiting', 'Heavy visiting'],
      datasets: [
        {
          data: [visitingFrequency[0], visitingFrequency[1], visitingFrequency[2], visitingFrequency[3]],
        },
      ],
    }

    return { visitingFrequency, visitingFrequencyChartData }
  },
  setAverageDwellTimes(mediaReport) {
    const averageDwellTimes = [
      mediaReport.Percent_unique_visitors_dwell_time1to5__c,
      mediaReport.Percent_unique_visitors_dwell_time6to10__c,
      mediaReport.Percent_unique_visitors_dwell_time11to15__c,
      mediaReport.Percent_unique_visitors_dwell_time16to30__c,
      mediaReport.Percent_unique_visitors_dwell_time31to60__c,
      mediaReport.Percent_unique_visitors_dwell_timemore60__c,
    ]

    const averageDwellTimesChartData = {
      labels: ['1 - 5 min/day', '6 - 10 min/day', '11 - 15 min/day', '16 - 30 min/day', '31 - 60 min/day', '>60 min/day'],
      datasets: [
        {
          data: [
            averageDwellTimes[0],
            averageDwellTimes[1],
            averageDwellTimes[2],
            averageDwellTimes[3],
            averageDwellTimes[4],
            averageDwellTimes[5],
          ],
        },
      ],
    }

    return { averageDwellTimes, averageDwellTimesChartData }
  },
  setPurchasingPowers(mediaReport) {
    const purchasingPowers = [
      mediaReport.Percent_affordability_tier_a__c,
      mediaReport.Percent_affordability_tier_b__c,
      mediaReport.Percent_affordability_tier_c__c,
      mediaReport.Percent_affordability_tier_d__c,
    ]

    const purchasingPowersChartData = {
      labels: ['Tier A', 'Tier B', 'Tier C', 'Tier D'],
      datasets: [
        {
          data: [purchasingPowers[0], purchasingPowers[1], purchasingPowers[2], purchasingPowers[3]],
        },
      ],
    }

    return { purchasingPowers, purchasingPowersChartData }
  },
  setVisitorTypes(mediaReport) {
    return [
      mediaReport.Percent_visitors__c,
      mediaReport.Percent_work__c,
      mediaReport.Percent_home__c,
    ]
  },
  setInterests(mediaReport) {
    const interests = []

    for (let i = 1; i <= 10; i++) {
      interests.push({
        name: mediaReport[`Interest_group_top_${i}__c`] || 'n/a',
        percent: mediaReport[`Percent_interest_top_${i}__c`] || 0,
      })
    }

    return interests
  },
  setTopAreas(mediaReport) {
    const topLivingAreas = []
    for (let i = 1; i <= 10; i++) {
      const livingRank = mediaReport[`Living_rank${i}__c`]
      if (livingRank) {
        topLivingAreas.push(this.pushArea(livingRank))
      }
    }

    const topWorkingAreas = []
    for (let i = 1; i <= 10; i++) {
      const workingRank = mediaReport[`Working_rank${i}__c`]
      if (workingRank) {
        topWorkingAreas.push(this.pushArea(workingRank))
      }
    }

    return { topLivingAreas, topWorkingAreas }
  },
  setAreas(mediaReport) {
    const livingAreas = []
    for (let i = 1; i <= 50; i++) {
      const livingCatchment = mediaReport[`living_catchment_${i}__c`]
      if (livingCatchment) {
        livingAreas.push(this.pushArea(livingCatchment))
      }
    }

    const workingAreas = []
    for (let i = 1; i <= 50; i++) {
      const workingCatchment = mediaReport[`working_catchment_${i}__c`]
      if (workingCatchment) {
        workingAreas.push(this.pushArea(workingCatchment))
      }
    }

    return { livingAreas, workingAreas }
  },
  pushArea(inputStr) {
    let splitInputs = inputStr.split(',')

    if (splitInputs.length === 1) {
      splitInputs = inputStr.split(';')
    }

    if (splitInputs.length === 3) {
      const province = splitInputs[0].split(' ').join('_')
      const district = splitInputs[1].split(' ').join('_')
      const coordinate = gmapCoordinates[`${province}_${district}`] || null

      return {
        province,
        district,
        value: splitInputs[2],
        coordinate
      }
    }
  },
}
