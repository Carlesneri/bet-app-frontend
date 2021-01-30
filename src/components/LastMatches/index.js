import React from 'react'
import './LastMatches.css'
import { getBet365href, getOPhref, getSportEmoji } from '../../utils'
import bet365Icon from '../../icons/bet365.ico'
import pinnacleIcon from '../../icons/pinnacleIcon.png'

function LastMatches({state = []}){

    // console.log(state);
    return <div className='last-matches'>
        {state.map(match => {
            if(match.cuotaDraw){
                return <div key={match.last} className="last-match">
                    <div className="last-match-title">
                        <span role="img" aria-label="sport">{getSportEmoji(match.game)}</span>
                        <a href={getBet365href(match.local)} rel="nofollow noopener noreferrer" target="_blank">
                            <img src={bet365Icon} alt="bet365 icon"/>
                        </a>
                        <a href={getOPhref(match.local)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.local}
                        </a>
                        <a className="partido-name" href={match.url} rel="nofollow noopener noreferrer" target="_blank">
                            <img src={pinnacleIcon} alt="icon pinnacle"/>
                        </a>
                        <a href={getOPhref(match.visitante)} target="_blank" rel="nofollow noopener noreferrer">
                            {match.visitante}
                        </a>
                        <a href={getBet365href(match.visitante)} rel="nofollow noopener noreferrer" target="_blank">
                            <img src={bet365Icon} alt="bet365 icon"/>
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
                    <a href={getBet365href(match.local)} rel="nofollow noopener noreferrer" target="_blank">
                        <img src={bet365Icon} alt="bet365 icon"/>
                    </a>
                    <a href={getOPhref(match.local)} target="_blank" rel="nofollow noopener noreferrer">
                        {match.local}
                    </a>
                    <a className="partido-name" href={match.url} rel="nofollow noopener noreferrer" target="_blank">
                        <img src={pinnacleIcon} alt="icon pinnacle"/>
                    </a>
                    <a href={getOPhref(match.visitante)} target="_blank" rel="nofollow noopener noreferrer">
                        {match.visitante}
                    </a>
                    <a href={getBet365href(match.visitante)} rel="nofollow noopener noreferrer" target="_blank">
                        <img src={bet365Icon} alt="bet365 icon"/>
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
