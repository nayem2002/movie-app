import React, { useEffect } from 'react';
import MoveList from '../moveList/MoveList';
import { useDispatch } from 'react-redux';
import { fatchMove, fatchShows } from '../../feature/MoveListSlice';
import ShowsList from '../shows/ShowsList';
import './home.css';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Mission';
  const showsText = 'Harry';

  useEffect(() => {
    dispatch(fatchMove(movieText));
    dispatch(fatchShows(showsText));
  }, [dispatch]);
  return (
    <>
      <div className="home-containear">
        <h2>Movie</h2>
        <Slider {...settings}>
          <MoveList />
        </Slider>
        <h2>Shows</h2>
        <ShowsList />
      </div>
    </>
  );
};

export default Home;
