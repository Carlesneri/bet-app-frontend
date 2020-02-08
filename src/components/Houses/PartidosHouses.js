import React, { Component } from 'react';
import PartidoHouses from './PartidoHouses';
import './PartidosHouses.css';
//import NoPartidos from '../NoPartidos/NoPartidos';

class PartidosHouses extends Component{
    constructor(props){
        super(props)
        this.state = {
            displayNoPartidos: {display: 'block'}
        }
        // this.no_partidos_display_none = this.no_partidos_display_none.bind(this)
        // this.no_partidos_display_block = this.no_partidos_display_block.bind(this)
    }
    // no_partidos_display_none = () =>  display = 'none'
    // no_partidos_display_block = () => display = 'block'
        
    render(){   
        const {partidos} = this.props;
        return (
            <div>
                {/* <div className="no-partidos" style={this.state.displayNoPartidos}>
                    <NoPartidos />
                </div> */}
                <div className="partidos">
                {
                    partidos.map((partido, index) => {
                        return <PartidoHouses 
                            // stateStyle={this.state.displayNoPartidos.display}
                            // styleHandlerNone={this.no_partidos_display_none} 
                            // styleHandlerBlock={this.no_partidos_display_block} 
                            key={index} 
                            partido={partido} />
                    })
                }
                </div>
            </div>
        );
    }
}

export default PartidosHouses;