import React, { useEffect } from 'react';
import './moveDetels.css';
import { useSelector, useDispatch } from 'react-redux';
import { fatchMovieAndShows } from '../../feature/MoveListSlice';
import { useParams } from 'react-router';
import { removeSlectedMoveAndShows } from '../../feature/MoveListSlice';

const MoveDetels = () => {
  const dispatch = useDispatch();
  const moveAndShowsDetels = useSelector(
    (state) => state.movie.slectMoveAndShow
  );
  const { imdbID } = useParams();

  useEffect(() => {
    dispatch(fatchMovieAndShows(imdbID));
    return () => {
      dispatch(removeSlectedMoveAndShows());
    };
  }, [dispatch]);

  const {
    Poster,
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Plot,
    Director,
    Genre,
    Country,
    Language,
    Awards,
  } = moveAndShowsDetels;
  return (
    <>
      {/* {Object.keys[moveAndShowsDetels]?.length === 0 ? (
        <div>....Loding</div>
      ) : ( */}
        <div className="movie-detels-containear">
          <div className="movie-detels-row">
            <div className="move-poster">
              <img src={Poster} alt="image" />
            </div>
            <div className="movie-detels-content">
              <div className="movie-title">
                <h2>{Title}</h2>
              </div>
              <div className="movie-discripiition">
                <ul>
                  <li>Year : {Year}</li>
                  <li>Reted : {Rated}</li>
                  <li>Released :{Released}</li>
                  <li>Runtime : {Runtime}</li>
                </ul>
              </div>
              <div className="movie-heading">
                <p>{Plot}</p>
              </div>
              <div className="movie-others-detels">
                <ul>
                  <li>Drictor : {Director} </li>
                  <li>Genre : {Genre}</li>
                  <li>Country : {Country}</li>
                  <li>Language : {Language}</li>
                  <li>Awards : {Awards}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default MoveDetels;
