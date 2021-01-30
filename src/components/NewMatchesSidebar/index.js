import React from 'react'
import './NewMatchesSidebar.css'
import { getBet365href, getSportEmoji } from '../../utils'
import pinnacleIcon from '../../icons/pinnacleIcon.png'


function NewMatchesSidebar({state = []}){

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
                            {match.local}
                        </a>
                        <a className="partido-name" href={match.url} rel="nofollow noopener noreferrer" target="_blank">
                            <img src={pinnacleIcon} alt="icon pinnacle"/>
                        </a>
                        <a href={getBet365href(match.visitante)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.visitante}
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
                            {match.local}
                        </a>
                        <span>-</span>
                        <a href={getBet365href(match.visitante)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.visitante}
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
