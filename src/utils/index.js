const getBet365href = term => `https://www.bet365.es/#/AX/K^${term}`
const getOPhref = term => `https://www.oddsportal.com/search/${term}`

function getSportEmoji (sport) {
  let emoji
  switch (sport) {
      case 'Fútbol': 
          emoji = '⚽'           
          break;
  
      case 'Tennis':
          emoji = '🎾'
          break;
      case 'Bet365':
          emoji = '🎾'
          break;
      default:
          emoji = ''
  }

  return emoji
}

export {getBet365href, getOPhref, getSportEmoji}
