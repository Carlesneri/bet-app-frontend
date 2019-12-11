import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import "./Partido.css";
import AverHighRow from "../AverHighRow/AverHighRow";
import link from '../../images/link.ico';
import eye from '../../images/eye.ico';

class Partido extends Component {

  filter(array, NUM_CUOTAS){   
    if (!array) return 1;
    else return array.filter((data, index) =>
      array.length - index < NUM_CUOTAS
    )
  }
  
  render() {
    
    const NUM_CUOTAS = 10;
    
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
    const eyeMinAgo = minutesAgo + ' min. ago';
    const eyeSize = 10 + 300/(1 + minutesAgo);
    const eyeStyle = {width: eyeSize + 'px'};

    return (
      <Container>
        <Card className="card-partido">
          <Card.Title className="card-title">
            <div title={eyeMinAgo}>
              <img style={eyeStyle} className='eye-ico' src={eye} alt='eye-ico' />
            </div>
            <div>{name}</div>
            <div>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className='link-ico' src={link} alt='OP Link'/>
              </a>
            </div>
          </Card.Title>
          <hr />
          <hr />
          <Card.Body className='card-body'>
            <AverHighRow aver={aver1} high={high1} percent={percent1}/>
            <AverHighRow aver={aver2} high={high2} percent={percent2}/>
            <AverHighRow aver={aver3} high={high3} percent={percent3}/>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Partido;
