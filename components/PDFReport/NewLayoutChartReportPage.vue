<template>
  <Grid isGutter15 isGutterVertical15 class="is-report">
    <GridColumn isColumn12 class="is-report-chart-secondary">
      <ReportCard>
        <div>
          <div class="flex items-center">
            <div class="w-2/12 text-xs">Package Name</div>
            <div class="w-10/12 text-lg font-medium text-color-primary-1 font-bold" v-html="mediaReport.Network_name__c"></div>
          </div>
          <!-- <div class="flex items-center">
            <div class="w-2/12 text-xs">Quantity</div>
            <div class="w-10/12 text-lg font-medium text-color-primary-1 font-bold">{{ mediaReport.no_of_screens__c }} Screens</div>
          </div> -->
          <div class="flex px-28 mt-1">
            <div class="w-1/2 border-r border-gray-300 text-center">
              <div class="flex items-start px-2">
                <div>
                  <img class="report-current-image is-icon is-icon-impression" :src="`${$path.static}/images/icons/ic-eye-blue.svg`" alt="Icon" />
                </div>
                <div class="text-left ml-2">
                  <div class="text-2xl px-3 font-bold bg-blue-700 rounded text-white text-center">{{ $options.filters.currencyFormat(mediaReport.Total_eyeballs__c) }}</div>
                  <div class="text-xs mt-1 text-center">Eyeballs per month</div>

                  <div class="flex bg-gray-200 items-center mt-1 rounded justify-center">
                    <div class="text-blue-600 font-semibold">CPME</div>
                    <div>
                      <span class="text-blue-800 font-bold ml-2">
                        {{ mediaReport[report.CPMNumber[user.Type_of_Customer__c]] != undefined ? mediaReport[report.CPMNumber[user.Type_of_Customer__c]].toFixed(2) : '' }}
                      </span>
                      <span class="text-gray-500 ml-1">THB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/2 text-center">
              <div class="flex items-start px-2">
                <div>
                  <img class="report-current-image is-icon is-icon-impression" :src="`${$path.static}/images/icons/ic-smart-phone-blue.svg`" alt="Icon" />
                </div>
                <div class="text-left ml-2">
                  <div class="text-2xl px-3 font-bold bg-blue-700 rounded text-white text-center">{{ $options.filters.currencyFormat(mediaReport.Reach__c) }}</div>
                  <div class="text-xs mt-1 text-center">Grid reach per month</div>

                  <div class="flex bg-gray-200 items-center mt-1 rounded justify-center">
                    <div class="text-blue-600 font-semibold">CPGR</div>
                    <div>
                      <span class="text-blue-800 font-bold ml-2">
                        {{ mediaReport[report.CPRNumber[user.Type_of_Customer__c]] != undefined ? mediaReport[report.CPRNumber[user.Type_of_Customer__c]].toFixed(2) : '' }}
                      </span>
                      <span class="text-gray-500 ml-1">THB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex px-40 mt-3">
          <!-- <div class="flex px-40 mt-3"> -->
            <div class="flex flex-col items-center">
              <img class="w-10" :src="`${$path.static}/images/icons/gauge-icon.png`" alt="Gauge-Icon" />
              <div>Rating point</div>
            </div>
            <div class="ml-10 flex justify-center">
              <div>
                <div class="rounded-t-full shadow w-14 h-7 text-white text-center font-bold" style="background-color:#f45e02">
                  <div class="pt-2">{{ mediaReport.RatingBKK__c || '-' }}</div>
                </div>
                <div class="shadow rounded-b-full border border-gray-200  w-14 h-7 text-center font-bold" style="color:#f45e02">
                  BKK
                </div>
              </div>
            </div>
            <div class="ml-5 flex justify-center">
              <div>
                <div class="rounded-t-full shadow w-14 h-7 text-white text-center font-bold" style="background-color:#f45e02">
                  <div class="pt-2">{{ mediaReport.RatingUPC__c || '-' }}</div>
                </div>
                <div class="shadow rounded-b-full border border-gray-200  w-14 h-7 text-center font-bold" style="color:#f45e02">
                  UPC
                </div>
              </div>
            </div>
            <div class="ml-5 flex justify-center">
              <div>
                <div class="rounded-t-full shadow w-14 h-7 text-white text-center font-bold" style="background-color:#f45e02">
                  <div class="pt-2">{{ mediaReport.RatingNTW__c || '-' }}</div>
                </div>
                <div class="shadow rounded-b-full border border-gray-200  w-14 h-7 text-center font-bold" style="color:#f45e02">
                  NTW
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReportCard>
    </GridColumn>
    <GridColumn isColumn6 class="is-report-chart-secondary">
      <ReportCard heading="Age">
        <ChartReportAge :ages="ages" />
      </ReportCard>
      <ReportCard heading="Audience Interest" style="margin-top:15px">
        <ChartReportInterest
          :interests="interests"
        />
      </ReportCard>
    </GridColumn>
    <GridColumn isColumn6 class="is-report-chart-secondary">
      <ReportCard heading="Average dwell time">
        <Grid isGutter5 isGutterVertical5>
          <GridColumn isColumn5 class="is-report-chart-secondary">
            <Grid isGutter20 isGutterVertical10>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isOrange6 :label="'1 - 5 min/day'" :percent="averageDwellTimes[0]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isPurple2 :label="'6 - 10 min/day'" :percent="averageDwellTimes[1]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isOrange4 :label="'11 - 15 min/day'" :percent="averageDwellTimes[2]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isBlue4 :label="'16 - 30 min/day'" :percent="averageDwellTimes[3]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isGreen1 :label="'31 - 60 min/day'" :percent="averageDwellTimes[4]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isPurple3 :label="'>60 min/day'" :percent="averageDwellTimes[5]" />
              </GridColumn>
            </Grid>
          </GridColumn>
          <GridColumn isColumn5 isGrow class="is-report-chart-secondary">
            <div class="detail-section is-chart-average-dwell-time">
              <Chart isAverageDwellTime>
                <ChartAverageDwellTimeReport :chartData="averageDwellTimesChartData" style="height: 150px;margin-top: -40px" />
              </Chart>
            </div>
          </GridColumn>
        </Grid>
      </ReportCard>
      <ReportCard class="mt-4" heading="Telecom Spending">
        <Grid isGutter5 isGutterVertical5>
          <GridColumn isColumn5 class="is-report-chart-secondary">
            <Report isLegend>
              <div class="report-lists is-legend">
                <div class="pb-2"><ChartReportLegend isOrange1 :label="'Tier A'" :subLabel="'(High spender) '" :percent="purchasingPowers[0]" /></div>
                <div class="pb-2"><ChartReportLegend isOrange3 :label="'Tier B'" :subLabel="'(Medium spender)'" :percent="purchasingPowers[1]" /></div>
                <div class="pb-2"><ChartReportLegend isOrange5 :label="'Tier C'" :subLabel="'(Medium-Low spender)'" :percent="purchasingPowers[2]" /></div>
                <div class="pb-2"><ChartReportLegend isOrange7 :label="'Tier D'" :subLabel="'(Low spender)'" :percent="purchasingPowers[3]" /></div>
              </div>
            </Report>
          </GridColumn>
          <GridColumn isColumn5 isGrow class="is-report-chart-secondary">
            <div class="detail-section is-chart-purchasing-power">
              <Chart isPurchasingPower>
                <ChartPurchasingPowerReport :chart-data="purchasingPowersChartData" style="height: 150px;margin-top: -30px" />
              </Chart>
            </div>
          </GridColumn>
        </Grid>
      </ReportCard>
      <ReportCard class="mt-4" heading="Visiting frequency">
        <Grid isGutter5 isGutterVertical5>
          <GridColumn isColumn5 class="is-report-chart-secondary">
            <Grid isGutterVertical10>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isBlue6 :label="'Occasional visitor'" :subLabel="'(1-2 days/month)'" :percent="visitingFrequency[0]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isBlue5 :label="'Light visiting'" :subLabel="'(3-8 days/month)'" :percent="visitingFrequency[1]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isBlue3 :label="'Medium visiting'" :subLabel="'(9-14 days/month)'" :percent="visitingFrequency[2]" />
              </GridColumn>
              <GridColumn isColumn12 class="pb-2">
                <ChartReportLegend isBlue2 :label="'Heavy visiting'" :subLabel="'(15+ days/month)'" :percent="visitingFrequency[3]" />
              </GridColumn>
            </Grid>
          </GridColumn>
          <GridColumn isColumn5 isGrow class="is-report-chart-secondary">
            <div class="detail-section is-chart-visiting-frequency">
              <!-- <img v-if="visitingFrequencyChartImage" style="width: 200px;" :src="visitingFrequencyChartImage" alt=""> -->
              <!-- <Chart isVisitingFrequency>
                <ChartVisitingFrequencyReport
                  :chart-data="visitingFrequencyChartData" style="height: 120px;margin-top: -40px"
                  @chartRendered="visitingFrequencyChartImage = $event"
                />
              </Chart> -->
              <Chart isVisitingFrequency>
                <ChartVisitingFrequencyReport
                  :chart-data="visitingFrequencyChartData" style="height: 120px;margin-top: -40px"
                />
              </Chart>
            </div>
          </GridColumn>
        </Grid>
      </ReportCard>
    </GridColumn>
  </Grid>
</template>

<script>
import { report } from '~/helpers/report'

export default {
  props: {
    visitingFrequency: {
      type: Array,
      default() {
        return []
      },
    },
    visitingFrequencyChartData: {
      type: Object,
      default: null,
    },
    ages: {
      type: Array,
      default() {
        return []
      },
    },
    averageDwellTimes: {
      type: Array,
      default() {
        return []
      },
    },
    averageDwellTimesChartData: {
      type: Object,
      default: null,
    },
    purchasingPowers: {
      type: Array,
      default() {
        return []
      },
    },
    purchasingPowersChartData: {
      type: Object,
      default: null,
    },
    visitorTypes: {
      type: Array,
      default() {
        return []
      },
    },
    livingAreas: {
      type: Array,
      default() {
        return []
      },
    },
    workingAreas: {
      type: Array,
      default() {
        return []
      },
    },
    mediaReport: {
      type: Object,
      default: null,
    },
    interests: {
      type: Array,
      default() {
        return []
      },
    },
    user: {
      type: Object
    },
    isNewReportLayout: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      report,
      // visitingFrequencyChartImage: null,
    }
  },
}
</script>

<style>

</style>
