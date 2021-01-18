import React from 'react'
import './NewMatches.css'

function newMatches({state}){

    console.log(state);
    return <div className='new-matches'>
        <h5>
            Last Matches
        </h5>
        {state.map(match => {
            return <div key={match.last} className="new-match">
                <a href={match.url} target="_blank" rel="noopener noreferrer">
                    {match.name}
                </a>
            </div>
        })
        }
    </div>

}

export default newMatches
