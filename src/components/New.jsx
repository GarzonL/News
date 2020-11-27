import React from 'react';

import './styles/New.css';

const New = ({id, nombre, descripcion, tema}) => {
    return(
        <div className="Home">
            <div id={id}></div>
            <div className="contenedor">
                <h1>{tema}</h1>
                <h2>{nombre}</h2>
                <h5>{descripcion}</h5>
            </div>
        </div>
    );
}

export default New;