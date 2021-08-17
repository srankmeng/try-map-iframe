import callApex from '~/plugins/callApex'
import { account } from '~/mock/account'

export default {
  getProfile(contactId) {
    return callApex(
      'PlanBController.getProfile',
      account,
      contactId
    )
  },
  forgetPassword(email) {
    return callApex(
      'PlanBController.sendForgotEmail',
      {
        success: false
      },
      email,
    )
  },
  changePassword(token, newPassword) {
    return callApex(
      'PlanBController.changePassword',
      {
        success: false
      },
      token,
      newPassword,
    )
  },
}
