import React, { useEffect, useState } from 'react';
import Tmdb from './components/Tmdb'


export default () => {


  const [movieList, setMovieList] = useState([]);

  useEffect(()=> {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      {/* Header */}
      <section className="lists">
        {movieList.map((item, key)=>(
          <div>
            {item.title}
          </div>
        ))}
      </section>
{/*   As listas
      Rodapé */}
    </div>
  );
}