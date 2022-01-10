import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fatchMove, fatchShows } from '../../feature/MoveListSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseAuth';

const Navbar = () => {
  const [search, setSearch] = useState();
  const [login, setLogin] = useState('/broken-image.jpg');
  const dispatch = useDispatch();

  const hendelInputSearch = (e) => {
    setSearch(e.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (search === '') {
      alert('please intate some value');
    } else {
      dispatch(fatchMove(search));
      dispatch(fatchShows(search));
      setSearch('');
    }
  };
  const singInGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      let user = res.user.photoURL;
      setLogin(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="nev-container">
        <nav className="nav">
          <div className="nav-brand">
            <NavLink to="/" activeClassName="active">
              <h3>Movies</h3>
            </NavLink>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="search your fovowrite move and serice"
              name="search"
              value={search}
              onChange={hendelInputSearch}
            />
            <i id="search-icon" className="fas fa-search" onClick={submit}></i>
          </div>
          <div className="user-icon">
            <Avatar src={login} className="user" onClick={singInGoogle} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
