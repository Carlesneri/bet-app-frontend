const getBet365href = (term) => `https://www.bet365.es/#/AX/K^${term}`
const getOPhref = (term) => `https://www.oddsportal.com/search/${term}`

function getSportEmoji(sport) {
  let emoji
  switch (sport) {
    case 'Fútbol':
      emoji = '⚽'
      break
    case 'soccer':
      emoji = '⚽'
      break

    case 'Tennis':
      emoji = '🎾'
      break
    case 'Bet365':
      emoji = '🎾'
      break
    default:
      emoji = ''
  }

  return emoji
}

function percentStyle(perc) {
  return { fontSize: Math.round(perc) * 1.5 + 10 }
}

function setCoefColor(cuof) {
  const greenColor = '#009432'
  const redColor = '#EA2027'
  const greyColor = '#bcbfc2'

  if (cuof) return cuof > 0 ? greenColor : redColor
  return greyColor
}

const eyeStyle = visited => visited ? { color: "rgba(234, 32, 39, .7)"} : {color: "#fff"}


export { getBet365href, getOPhref, getSportEmoji, percentStyle, setCoefColor, eyeStyle }
