import React from 'react'
import './LastMatches.css'

function LastMatches({state = []}){

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
    return <div className='last-matches'>
        {/* <div>
            <iframe title="search"
                name="search"
                width="700"
                height="300">
            </iframe>
        </div> */}
        {state.map(match => {
            if(match.cuotaDraw){
                return <div key={match.last} className="last-match">
                    <div className="last-match-title">
                        <span role="img" aria-label="sport">{getSportEmoji(match.game)}</span>
                        <a href={getBet365href(match.local)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.local}
                        </a>
                        <span>-</span>
                        <a href={getBet365href(match.visitante)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.visitante}
                        </a>
                    </div>
                    <div className="last-match-cuotas">
                        <div>{match.cuotaLocal}</div>
                        <div>{match.cuotaDraw}</div>
                        <div>{match.cuotaVisitante}</div>
                    </div>
                </div>
            }
            return <div key={match.last} className="last-match">
                <div className="last-match-title">
                    <span role="img" aria-label="sport">{getSportEmoji(match.game)}</span>
                    <a href={getBet365href(match.local)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.local}
                        </a>
                        <span>-</span>
                        <a href={getBet365href(match.visitante)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.visitante}
                        </a>
                </div>
                <div className="last-match-cuotas">
                    <div>{match.cuotaLocal}</div>
                    <div>{match.cuotaVisitante}</div>
                </div>
            </div>
        })
        }
    </div>

}

export default LastMatches
