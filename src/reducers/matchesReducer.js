export const MATCHES_ACTIONS = {
  ADD: 'add',
  IS_VISITED: 'is visited',
  TOGGLE_VISITED: 'toggle visited'
}

export const matchesReducer = (state, action) => {
  switch (action.type) {
    case MATCHES_ACTIONS.ADD:
      if(state.length === 0){
        return action.payload
      }
      const matches = action.payload
      const newState = matches.map(match => {
        const isMatch = state.find(stateMatch => stateMatch.name === match.name)
        if(isMatch) return {...isMatch, ...match}
        return match
      })
      return newState

    case MATCHES_ACTIONS.IS_VISITED:
      // console.log(action.payload)
      return state.map(match => {
        if(match.name === action.payload) {
          return { ...match, visited: true}
        }
        return match
      })

    case MATCHES_ACTIONS.TOGGLE_VISITED:
      return state.map(match => {
        if(match.name === action.payload) {
          return { ...match, visited: !match.visited || false }
        }
        return match
      })

    default:
      return state
  }
}
