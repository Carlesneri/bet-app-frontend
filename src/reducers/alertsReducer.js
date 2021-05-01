export const ALERTS_ACTIONS = {
  ADD: 'add'
}

export const alertsReducer = (state, action) => {
  switch (action.type) {
    case ALERTS_ACTIONS.ADD:
      return action.payload
    default:
      return state
  }
}
