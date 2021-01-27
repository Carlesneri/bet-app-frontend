import React, { Component } from "react";
import "./Partido.css";
import AverHighRow from "./AverHighRow";

class Partido extends Component {

  filter(array, NUM_CUOTAS){   
    if (!array) return 1;
    else return array.filter((data, index) =>
    array.length - index < NUM_CUOTAS
    )
  }
  
  
  render() {
    
    // const {index} = this.props
    // //-->Parpadeo segundos
    // const parpadeoEl = document.getElementById(index)
    // const parpadeo = element => {
    //   //parpadeoEl.classList.add('parpadeo')
    //   element.innerText = ''
    //   setTimeout(() => element.innerText = '"', 1000)
    // }
    // if(parpadeoEl) {  
    //   setInterval(parpadeo(parpadeoEl), 2000)
    // }

    const NUM_CUOTAS = 8;
    
    var { 
      aver1, aver2, aver3, high1, high2, high3, 
      name, url, last, percent1, percent2, percent3
    } = this.props.partido;
    const {partidoOp} = this.props    
    
    //-->Obtenemos datos de la url
    const urlSplit = url.split('/')
    let i = urlSplit.length 
    const game = urlSplit[i - 5]
    const country = urlSplit[i - 4]
    const tournament = urlSplit[i - 3].replace(/-/g, " ")
    
  
    aver1 = this.filter(aver1, NUM_CUOTAS)
    aver2 = this.filter(aver2, NUM_CUOTAS)
    aver3 = this.filter(aver3, NUM_CUOTAS)
    high1 = this.filter(high1, NUM_CUOTAS)
    high2 = this.filter(high2, NUM_CUOTAS)
    high3 = this.filter(high3, NUM_CUOTAS)   
    
    const minutesAgo = ((Date.now() - last)/(1000*60)).toFixed(1);
    const minAgoText = minutesAgo + ' min. ago';

    const bgAlpha = 1 - minutesAgo/60

    const titleStyle = {
      backgroundColor: `rgba(0, 100, 0, ${bgAlpha})`
    }

    // const minutesAgoStyle = {opacity: 2 / (minutesAgo + 1)}


    return (
      <div className="partido card-bg" >
        <div className="partido-title-op" style={titleStyle}>
          <div className="partido-name-op" >
            <a href={url} target="_blank" rel="nofollow noopener noreferrer">{name}</a>
          </div>
          <div className="min-ago-group" >
            <span title={minAgoText} className='min-ago-text'>
              {minutesAgo}
            </span>
            <span>
              "
            </span>
          </div>
        </div>
        <hr />
        <div className='partido-body'>
          <div className="partido-data">
            <span>
              {game} 
            </span>
            <span> - </span>
            <span>
              {country}
            </span>
            <span> - </span>
            <span>
              {tournament}
            </span>
          </div>
          <div className="aver-high-rows">
            <AverHighRow aver={aver1} high={high1} percent={percent1}/>
            <AverHighRow aver={aver2} high={high2} percent={percent2}/>
            <AverHighRow aver={aver3} high={high3} percent={percent3}/>
          </div>
          {partidoOp && <div className="partido-op">
            <span>
              QLocal: {Math.round(partidoOp.localQM2 * 100)/100} ({partidoOp.numMatchesLocalM2})
            </span>
            <span>
              QVisitante: {Math.round(partidoOp.visitanteQM2 * 100)/100} ({partidoOp.numMatchesVisitanteM2})
            </span>
          </div>}
        </div>
      </div>
    );
  }
}

export default Partido;
