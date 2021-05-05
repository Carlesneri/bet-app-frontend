export const TEAMS_ACTIONS = {
  ADD: 'add'
}

export const teamsReducer = (state, action) => {
  switch (action.type) {
    case TEAMS_ACTIONS.ADD:
      // console.log('action add reducer')
      return state.concat( action.payload)
  
    default:
      return state
  }
} 