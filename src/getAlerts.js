import { getPercent } from './database'

export function getAlerts({comparatorMatches, matches}){
    let alerts = {
        comparator: [],
        matches: []
    }
    if(comparatorMatches){
        alerts.comparator = getOPAlerts(comparatorMatches)
    }
    if(matches) {
        alerts.matches = getMatchesAlerts(matches)
    }
    return alerts
}

function getOPAlerts(partidosOP){    
    let alertsOP = []
    if(partidosOP.length){
        partidosOP.forEach(partido => {
            const percent = Math.max(partido.percent1, partido.percent2, partido.percent3)
            if(percent >= 6) alertsOP.push(partido)
        })
    }
    return alertsOP
}

function getMatchesAlerts(matches){    
    let alerts = []
    if(matches.length){
        matches.forEach(match => {
            match.percent1 = getPercent(match.player1Aver, match.player1Max)
            match.percent2 = getPercent(match.player2Aver, match.player2Max)
            const percent = Math.max(match.percent1, match.percent2)
            if(percent >= 6) alerts.push(match)
        })
    }
    return alerts
}
