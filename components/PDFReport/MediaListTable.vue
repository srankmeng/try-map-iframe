<template>
  <ReportCard>
    <h3 class="text-center text-xl font-bold text-color-primary-1">{{ month.month }}</h3>
    <table class="mt-2 w-full media-list-table">
      <thead>
        <tr>
          <th class="w-10">No</th>
          <th class="w-24">Media type</th>
          <th>Media</th>
          <th class="w-32">Duration</th>
          <!-- <th class="w-20">No. of screens</th> -->
          <th class="w-20">Eyeballs / month</th>
          <th class="w-28">Grid reach / month</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, productIndex) in month.products" :key="productIndex">
          <td>{{ productIndex + 1 }}</td>
          <td>{{ product.product ? product.product.Type__c : null }}</td>
          <td>{{ product.product ? product.product.Network_Name__c : null }}</td>
          <td>{{ formatDates(product.date.start, product.date.end) }}</td>
          <!-- <td class="text-right">{{ product.mediaReport && product.mediaReport.mediaReport ? product.mediaReport.mediaReport.no_of_screens__c : null }}</td> -->
          <td>{{ product.mediaReport && product.mediaReport.auds.length > 0 ? $options.filters.currencyFormat(product.mediaReport.totalEyeball) : null }}</td>
          <td>{{ product.mediaReport && product.mediaReport.auds.length > 0 ? $options.filters.currencyFormat(product.mediaReport.totalReach) : null }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" style="text-align: right">
            <span class="mr-10 text-md font-bold text-color-primary-1">
              Total
            </span>
          </td>
          <td class="text-md font-bold text-color-primary-1">{{ $options.filters.currencyFormat(month.totalEyeball) }}*</td>
          <td class="text-md font-bold text-color-primary-1">{{ $options.filters.currencyFormat(month.totalReach) }}*</td>
        </tr>
      </tfoot>
    </table>
  </ReportCard>
</template>

<script>
import moment from 'moment'
require('twix')

export default {
  props: {
    month: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log('month', this.month);
  },
  methods: {
    formatDates(start, end) {
      return moment(start)
                .twix(end, { allDay: true })
                .format()
    },
  }
}
</script>

<style lang="scss">
  .media-list-table {
    thead {
      th {
        border-bottom: 1px solid blue;
        padding: 10px 0;
      }
    }

    tbody {
      tr:not(:last-child) {
        td {
          border-bottom: 1px solid #D8D8D8;
        }
      }

      td {
        padding: 10px 4px;
      }
    }

    tfoot {
      td {
        padding: 10px 4px;
      }
    }
  }
</style>
