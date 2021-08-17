import callApex from '~/plugins/callApex'

export default {
  createLog({ activityName, refIdForRelatedPackage, salesforceUserId }) {
    return callApex(
      'PlanBController.createLog',
      null,
      { activityName, refIdForRelatedPackage, salesforceUserId },
    )
  }
}
