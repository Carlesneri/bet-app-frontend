import React from 'react';

function PartidoHouses(props) {
    const {partido} = props;
    
    return(<div>{partido.local}</div>);
}

export default PartidoHouses;