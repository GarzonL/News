import React, { useState } from 'react';
import { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import Error from '../components/Error';
import './styles/News.css';

const News = ({history}) => {
    const [notice, setNotice] = useState({
        id:'',
        nombre:'',
        descripcion:'',
        tema:'',
    })

    const [error, setError] = useState(false)
    const {id, nombre, descripcion, tema} = notice;

    const handleChange = e => {
        setNotice({
            ...notice,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        if (id.trim() === '' || nombre.trim() === ''|| descripcion.trim() === '' || tema.trim()==='') {
            setError(true)
            return;
         }
         setError(false);
        e.preventDefault();
        let news = JSON.parse(localStorage.getItem('news'));
        if(news === null){
            news=[];
        }
        news.push(notice)
        localStorage.setItem('news', JSON.stringify(news));
        history.push('/Home')
    }

    return(
        <div className="Noticia">
           {error ? <Error mensaje='Todos los Campos son Requeridos' /> : null}
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <h4 className="text-crear">ID</h4>
                  <input type="text" className="form-control input-crear" name="id" onChange={handleChange} />
               </div>
               <div className="form-group">
                  <h4 className="text-crear">Nombre</h4>
                  <input type="text" className="form-control input-crear" name="nombre" onChange={handleChange} />
               </div>
               <div className="form-group">
                  <h4 className="text-crear">Tema</h4>
                  <input type="text" className="form-control input-crear" name="tema" onChange={handleChange} />
               </div>
               <div className="form-group">
                  <h4 className="text-crear">Descripción</h4>
                  <input type="text" className="form-control input-crear" name="descripcion" onChange={handleChange} />
               </div>
               
               <button type="submit" className="btn btn-primary">GUARDAR TAREA</button>
            </form>

        </div>
    )
}

export default News;