import React, { Component } from 'react';
import './Calculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes, faBroom} from '@fortawesome/free-solid-svg-icons';


class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            cuotas: ['', '', ''], 
            betMargin1: '',
            betMargin2: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist();
        const {cuotas} = this.state
        const cuotaName = e.target.name
        const cuotaValue = e.target.value
        let newCuotas = cuotas;
        switch(cuotaName){
            case 'cuota1': 
                newCuotas = [cuotaValue, cuotas[1], cuotas[2]];
                break;
            case 'cuota2': 
                newCuotas = [cuotas[0], cuotaValue, cuotas[2]];
                break;
            case 'cuota3': 
                newCuotas = [cuotas[0], cuotas[1], cuotaValue];
                break;
            default: break
        }
        this.setState({cuotas: newCuotas})
    }   

    handleChangeBM = e => {
        e.persist();
        const newState = this.state        
        newState[e.target.name] = e.target.value
        this.setState(newState);        
    }

    
    render(){  

        const handleClick = e => {
            e.preventDefault();
            this.props.displayValue();
        }
        const handleClean = e => {
            e.preventDefault()
            this.setState({
                cuotas: ['', '', ''], 
                betMargin1: '',
                betMargin2: ''
            })
        }
        
        const {cuotas} = this.state
        let houseMargin = ''
        const realCuotas = cuotas.filter(el => el > 0)
        if(realCuotas.length){
            houseMargin = 1
            realCuotas.map(el =>  houseMargin -= 1 / el)            
            houseMargin = (Math.abs(houseMargin) * 100).toFixed(2)
        }

        const {betMargin1, betMargin2} = this.state
        let betMargin = ''
        if(betMargin1 && betMargin2)
            betMargin = (100 * Math.abs(1 / betMargin1 - 1 / betMargin2)).toFixed(2)

        
        return (
            <div className="calculator">
                <form>
                    <div className="calc-group">
                        <div className="calc-label">
                            House Margin
                        </div>
                        <div className="input-text-group">
                            <input 
                                type='text' 
                                name="cuota1"  
                                value={this.state.cuotas[0]}
                                onChange={this.handleChange} 
                                onClick={this.handleChange}/>
                            <input 
                                type='text' 
                                name="cuota2" 
                                value={this.state.cuotas[1]}
                                onChange={this.handleChange} 
                                onClick={this.handleChange}/>
                            <input 
                                type='text' 
                                name="cuota3" 
                                value={this.state.cuotas[2]}
                                onChange={this.handleChange} 
                                onClick={this.handleChange}/>
                        </div>
                        <div className="house-margin">
                            {houseMargin}
                        </div>
                    </div>
                    <div className="calc-group">
                        <div className="calc-label">
                            Bet Margin
                        </div>
                        <div className="input-text-group">
                            <input type='text' 
                                name="betMargin1"  
                                value={this.state.betMargin1}
                                onChange={this.handleChangeBM} 
                                onClick={this.handleChangeBM}/>
                            <input type='text' 
                                name="betMargin2"  
                                value={this.state.betMargin2}
                                onChange={this.handleChangeBM} 
                                onClick={this.handleChangeBM}/>
                        </div>
                        <div className="bet-margin">
                            {betMargin}
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={handleClean}>
                            <div className="clean-icon">
                                <FontAwesomeIcon icon={faBroom} />
                            </div>
                        </button>
                        <button onClick={handleClick}>
                            <div className="close-icon">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Calculator;