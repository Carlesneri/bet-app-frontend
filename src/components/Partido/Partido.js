import React, { Component } from "react";
import { Card, Button, Container } from "react-bootstrap";
import db from "../../database";
import "./Partido.css";
import AverHighRow from "../AverHighRow/AverHighRow";

class Partido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aver1: [
        {
          cuota: 1,
          time: "No time yet",
          style: 'black'
        }
      ],
      aver2: [
        {
          cuota: 1,
          time: "No time yet",
          style: 'black'
        }
      ],
      aver3: [
        {
          cuota: 1,
          time: "No time yet",
          style: 'black'
        }
      ],
      high1: [
        {
          cuota: 1,
          time: "No time yet",
          style: 'black'
        }
      ],
      high2: [
        {
          cuota: 1,
          time: "No time yet",
          style: 'black'
        }
      ],
      high3: [
        {
          cuota: 1,
          time: "No time yet",
          style: 'black'
        }
      ],
      name: "Esperando partido...",
      url: "Esperando Url..."
    };
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    const { name, url } = this.props.partido;
    let newAver1 = [];
    let newAver2 = [];
    let newAver3 = [];
    let newHigh1 = [];
    let newHigh2 = [];
    let newHigh3 = [];

    db.child(name + "/aver1").once("value", snap => {
      newAver1 = [];
      snap.forEach(snapChild => {
        const cuota = snapChild.val().cuota;
        const time = snapChild.val().time;
        newAver1.push({ cuota, time });
      });
    });
    db.child(name + "/aver2").once("value", snap => {
      newAver2 = [];
      snap.forEach(snapChild => {
        const cuota = snapChild.val().cuota;
        const time = snapChild.val().time;
        newAver2.push({ cuota, time });
      });
    });
    db.child(name + "/aver3").once("value", snap => {
      newAver3 = [];
      snap.forEach(snapChild => {
        const cuota = snapChild.val().cuota;
        const time = snapChild.val().time;
        newAver3.push({ cuota, time });
      });
    });
    db.child(name + "/high1").once("value", snap => {
      newHigh1 = [];
      snap.forEach(snapChild => {
        const cuota = snapChild.val().cuota;
        const time = snapChild.val().time;
        newHigh1.push({ cuota, time });
      });
    });
    db.child(name + "/high2").once("value", snap => {
      newHigh2 = [];
      snap.forEach(snapChild => {
        const cuota = snapChild.val().cuota;
        const time = snapChild.val().time;
        newHigh2.push({ cuota, time });
      });
    });
    db.child(name + "/high3").once("value", snap => {
      newHigh3 = [];
      snap.forEach(snapChild => {
        const cuota = snapChild.val().cuota;
        const time = snapChild.val().time;
        newHigh3.push({ cuota, time });
      });
    });
    this.setState({
      aver1: newAver1,
      aver2: newAver2,
      aver3: newAver3,
      high1: newHigh1,
      high2: newHigh2,
      high3: newHigh3,
      name: name,
      url: url
    });
  }

  filter(array, NUM_CUOTAS){
    return array.filter((data, index) =>
      array.length - index < NUM_CUOTAS
    )
  }

  getPercent(aver, high){
     return Math.round(1000*(1/high[high.length - 1].cuota - 1/aver[aver.length - 1].cuota))/10
  }

  render() {
    
    const NUM_CUOTAS = 10;
    var { 
      aver1, aver2, aver3, high1, high2, high3, 
      name, url
    } = this.state;
    aver1 = this.filter(aver1, NUM_CUOTAS)
    aver2 = this.filter(aver2, NUM_CUOTAS)
    aver3 = this.filter(aver3, NUM_CUOTAS)
    high1 = this.filter(high1, NUM_CUOTAS)
    high2 = this.filter(high2, NUM_CUOTAS)
    high3 = this.filter(high3, NUM_CUOTAS)
    const percent1 = this.getPercent(aver1, high1).toString()
    const percent2 = this.getPercent(aver2, high2).toString()
    const percent3 = this.getPercent(aver3, high3).toString()

    return (
      <Container>
        <Card className="card-partido">
          <Card.Title className="card-title">
            <div>{name}</div>
            <div className="button">
              <Button
                size="sm"
                href={url}
                target="_blank"
                variant="outline-dark"
              >
                OP
              </Button>
            </div>
          </Card.Title>
          <Card.Body>
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
