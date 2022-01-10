import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error from './components/error/Error';
import Fotter from './components/fotter/Fotter';
import Home from './components/home/Home';
import MoveDetels from './components/moveDetels/MoveDetels';
import Navbar from './components/nevbar/Navbar';
import Scroll from './components/scroll/Scroll';

const App = () => {
  return (
    <>
      <Scroll />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movedetels/:imdbID" component={MoveDetels} />
        <Route component={Error} />
      </Switch>
      <Fotter />
    </>
  );
};

export default App;
