import React from 'react';
import './movieList.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MoveList = () => {
  const moveis = useSelector((state) => state.movie.movies);

  return (
    <>
      <div className="move-list-containerr">
        {moveis.Search?.map((val) => {
          const { imdbID, Poster, Title, Year } = val;
          return (
            <Link to={`/movedetels/${imdbID}`}>
              <div className="movie-box" key={imdbID}>
                <div className="movie-poster">
                  <img src={Poster} alt="image" />
                </div>
                <div className="movies-content">
                  <h5>{Title} </h5>
                  <p>{Year}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MoveList;
