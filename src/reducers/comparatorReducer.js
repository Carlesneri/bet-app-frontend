export const COMPARATOR_ACTIONS = {
  ADD: 'add',
  IS_VISITED: 'is visited',
  TOGGLE_VISITED: 'toggle visited',
  UPDATE: 'update'
}

export const comparatorReducer = (state, action) => {
  switch (action.type) {
    case COMPARATOR_ACTIONS.ADD:
      // console.log('reducer comparator')
      if(state.length === 0){
        return action.payload
      }
      const matches = action.payload
      const newState = matches.map(match => {
        const isMatch = state.find(stateMatch => stateMatch.name === match.name)
        if(isMatch) {
          const updatedMatch = {...isMatch, ...match}
          // console.log(updatedMatch)
          return updatedMatch
        }
        return match
      })
      return newState

    case COMPARATOR_ACTIONS.IS_VISITED:
      // console.log(action.payload)

      return state.map(match => {
        if(match.name === action.payload) {
          return { ...match, visited: true}
        }
        return match
      })

    case COMPARATOR_ACTIONS.TOGGLE_VISITED:
      return state.map(match => {
        if(match.name === action.payload) {
          return { ...match, visited: !match.visited || false }
        }
        return match
      })

    case COMPARATOR_ACTIONS.UPDATE:
      return state.map(match => {
        if(match.name === action.payload.name) {
          return { ...match, data: action.payload.data }
        }
        return match
      })

    default:
      return state
  }
}
