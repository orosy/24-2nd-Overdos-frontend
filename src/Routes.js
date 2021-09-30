import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/Sign/SignUp/SignUp';
import SignIn from './pages/Sign/SignIn/SignIn';
import Review from './pages/Review/Review';
import Profile from 'pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import SurveyResult from 'pages/SurveyResult/SurveyResult';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/surveyresult" component={SurveyResult} />
        <Route
          exact
          path="*"
          component={() => (
            <>
              <Route exact path="/" component={Main} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/profile" component={Profile} />
              <Footer />
            </>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
