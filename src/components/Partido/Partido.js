import React, { Component } from "react";
import "./Partido.css";
import AverHighRow from "../AverHighRow/AverHighRow";

class Partido extends Component {
  
  filter(array, NUM_CUOTAS){   
    if (!array) return 1;
    else return array.filter((data, index) =>
    array.length - index < NUM_CUOTAS
    )
  }
  
  render() {
    const NUM_CUOTAS = 8;
    
    var { 
      aver1, aver2, aver3, high1, high2, high3, 
      name, url, last, percent1, percent2, percent3
    } = this.props.partido;
  
    aver1 = this.filter(aver1, NUM_CUOTAS)
    aver2 = this.filter(aver2, NUM_CUOTAS)
    aver3 = this.filter(aver3, NUM_CUOTAS)
    high1 = this.filter(high1, NUM_CUOTAS)
    high2 = this.filter(high2, NUM_CUOTAS)
    high3 = this.filter(high3, NUM_CUOTAS)   
    
    const minutesAgo = ((Date.now() - last)/(1000*60)).toFixed(1);
    const minAgoText = minutesAgo + ' min. ago';
    const minutesAgoStyle = {opacity: 2 / (minutesAgo + 1)}

    return (
      <div className="partido">
        <div className="partido-title">
          <div className="partido-name" >
            <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
          </div>
          <div title={minAgoText} style={minutesAgoStyle} className='minAgoText'>
            {minutesAgo}<span className="parpadeo"> '</span>
          </div>
          {/* <div className="link-ico-container">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img className='link-ico' src={link} alt='OP Link'/>
            </a>
          </div> */}
        </div>
        <hr />
        <div className='partido-body'>
          <AverHighRow aver={aver1} high={high1} percent={percent1}/>
          <AverHighRow aver={aver2} high={high2} percent={percent2}/>
          <AverHighRow aver={aver3} high={high3} percent={percent3}/>
        </div>
      </div>
    );
  }
}

export default Partido;
