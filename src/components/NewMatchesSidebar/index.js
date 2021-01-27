import React from 'react'
import './NewMatchesSidebar.css'

function NewMatchesSidebar({state = []}){

    function getSportEmoji (sport) {
        let emoji
        switch (sport) {
            case 'Fútbol': 
                emoji = '⚽'           
                break;
        
            case 'Tennis':
                emoji = '🎾'
                break;
            default:
                emoji = ''
        }

        return emoji
    }

    function getBet365href(local) {
        return `https://www.bet365.es/#/AX/K^${local}`
    }

    // console.log(state);
    return <div className='new-matches'>
        <h5>
            Last Matches
        </h5>
        {state.map(match => {
            if(match.cuotaDraw){
                return <div key={match.last} className="new-match">
                    <div className="new-match-title">
                        <span role="img" aria-label="sport">{getSportEmoji(match.game)}</span>
                        <a href={getBet365href(match.local)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.local} - {match.visitante}
                        </a>
                    </div>
                    <div className="new-match-cuotas">
                        <div>{match.cuotaLocal}</div>
                        <div>{match.cuotaDraw}</div>
                        <div>{match.cuotaVisitante}</div>
                    </div>
                </div>
            }
            return <div key={match.last} className="new-match">
                <div className="new-match-title">
                    <span role="img" aria-label="sport">{getSportEmoji(match.game)}</span>
                    <a href={getBet365href(match.local)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.local} - {match.visitante}
                    </a>
                </div>
                <div className="new-match-cuotas">
                    <div>{match.cuotaLocal}</div>
                    <div>{match.cuotaVisitante}</div>
                </div>
            </div>
        })
        }
    </div>

}

export default NewMatchesSidebar
