import React, { useEffect, useState } from 'react';
import Tmdb from './components/Tmdb';
import MovieRow from './components/MovieRow';


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
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
{/*   As listas
      Rodapé */}
    </div>
  );
}