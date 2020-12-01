
export function getAlerts(state){
    let alerts = {
        alertsOP: [],
        alertsDrop: [],
        alertsTennis: []
    }
    if(state.partidosOP){
        alerts.alertsOP = getOPAlerts(state.partidosOP)
    }
    if(state.drop){
        alerts.alertsDrop = getDropAlerts(state.drop)
    }
    // if(state.tennis){
    //     alerts.alertsTennis = getTennisAlerts(state.tennis)
    // }
    return alerts
}



function getOPAlerts(partidosOP){    
    let alertsOP = []
    if(partidosOP.length){
        partidosOP.forEach(partido => {
            const getPercent = Math.max(partido.percent1, partido.percent2, partido.percent3)
            if(getPercent >= 6) alertsOP.push(partido)
        })
    }
    return(alertsOP)
}

function getDropAlerts(partidosDrop){
    let alertsDrop = []
    if(partidosDrop.length){
        partidosDrop.forEach(partido => {
            const {cuotaLocal, cuotaDraw, cuotaVisitante} = partido
            let localDrop, drawDrop, visitanteDrop
            if(cuotaLocal.length > 1){
                localDrop = Math.abs(100*(1/cuotaLocal[cuotaLocal.length -1] - 1/cuotaLocal[cuotaLocal.length - 2]))
            }
            if(cuotaDraw.length > 1){
                drawDrop = Math.abs(100*(1/cuotaDraw[cuotaDraw.length -1] - 1/cuotaDraw[cuotaDraw.length - 2]))
            }
            if(cuotaVisitante.length > 1){
                visitanteDrop = Math.abs(100*(1/cuotaVisitante[cuotaVisitante.length -1] - 1/cuotaVisitante[cuotaVisitante.length - 2]))
            }
            const drop = Math.max(localDrop, drawDrop, visitanteDrop)
            // console.log('drops',localDrop, drawDrop, visitanteDrop);
            // console.log('dropMax',drop);
            if(drop > 3) alertsDrop.push(partido)
            // console.log('alertsDrop', alertsDrop);            
        })  
    }
    return alertsDrop
}

// function getTennisAlerts(partidosTennis){
//     let alertsTennis = []
//     if(partidosTennis.length){
//         partidosTennis.forEach(partido => {
//             const coef = Math.abs(100 * (
//                 partido.player1.player1Coef
//                 /
//                 partido.player1.player1Matches
//                 - 
//                 partido.player2.player2Coef
//                 /
//                 partido.player2.player2Matches
//             ))
//             // console.log('coefTennis', coef);
//             if(coef > 10) alertsTennis.push(partido)
//             // console.log('alertsTennis', alertsTennis); 
//         })
//     }
//     return alertsTennis
// }