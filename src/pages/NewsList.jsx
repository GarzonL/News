import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles/NewsList.css';

const NewsList=() =>{
    const [data, setData] = useState([
        {id:1, nombre: 'Tormenta', descripcion:'Tormenta grave en bogotá', tema:'Clima'},
        {id:2, nombre: 'Adiós alcaldesa', descripcion:'Adiós a la alcaldesa', tema:'Política'},
    ])
    return(
        <div className="container-list">
            <Link to="/AgregarNoticias"><button class="btn btn-success agg">Nueva noticia</button></Link>
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Tema</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem)=>(
                        <tr>
                            <td>{elem.id}</td>
                            <td>{elem.nombre}</td>
                            <td>{elem.descripcion}</td>
                            <td>{elem.tema}</td>
                            <td><button class="btn btn-primary">Editar</button></td>
                            <td><button class="btn btn-danger">Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>        
    );
}

export default NewsList;