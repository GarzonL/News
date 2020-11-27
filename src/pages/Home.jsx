import React, { useEffect, useState } from 'react';


import './styles/Home.css';

const Home = () => {
    const [news, setNews] = useState([]);
    const [ban, setBan] = useState(false);

    useEffect(() => {
        if (!ban) {
           const consulta = JSON.parse(localStorage.getItem('news')); //Obteniendo lo del LocalStorage
           if (consulta) {
              setNews(consulta)
           }
           setBan(true)
        }
     }, [news, ban])

    const handleClick = e => {
        const filtrado = news.filter( notice =>(notice.id !== e.target.id))
        localStorage.setItem('tareas', JSON.stringify(filtrado));
        setNews(filtrado)
     }

    return(
        <div className="Home">
            <div className="contenedor1">
            {news.length !== 0 ? 
                news.map(notice => (
                    <Home
                        key={notice.id}
                        id={notice.id}
                        nombre={notice.nombre}
                        descripcion={notice.descripcion}
                        tema={notice.tema}
                        handleClick={handleClick}

                    />
                ))
            : 
                <h2>No hay noticias</h2>
            }
            </div>
            <div className="contendor2">
                
            </div>
        </div>
    );
}

export default Home;
