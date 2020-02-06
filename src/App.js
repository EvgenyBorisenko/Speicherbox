import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Produkte from './Components/Produkte/Produkte';
import Preise from './Components/Preise/Preise';
import UberUns from './Components/UberUns/UberUns';
import Sicherheit from './Components/Sicherheit/Sicherheit';
import Support from './Components/Support/Support';
import Footer from './Components/Footer/Footer';
import HomeSpeicherbox from './Components/HomeSpeicherbox/HomeSpeicherbox';
import MultiuserSpeicherbox from './Components/MultiuserSpeicherbox/MultiuserSpeicherbox';

function App() {
  return (
    <Switch>
      <div className="App">
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/produkte" component={Produkte} />
        <Route path="/preise" component={Preise} />
        <Route path="/uberuns" component={UberUns} />
        <Route path="/sicherheit" component={Sicherheit} />
        <Route path="/support" component={Support} />
        <Route path="/bestellen/home" component={HomeSpeicherbox} />
        <Route path="/bestellen/multiuser" component={MultiuserSpeicherbox} />

        <Footer />
      </div>
    </Switch>
  );
}

export default withRouter(App);
