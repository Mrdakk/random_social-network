import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '../app/partials/Header';
import { Footer } from '../app/partials/Footer';
import { Register } from '../app/component/LoginRegister/Register'
import { Login } from '../app/component/LoginRegister/Login'
import { FeedPage } from '../app/pages/FeedPage';
import { ProfilePage } from '../app/pages/ProfilePage';
import './App.css';
import { PeoplePage } from './pages/PeoplePage';
import { SinglePostPage } from '../app/pages/SinglePostPage'

export const App = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/post/:id" component={SinglePostPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path="/feed" component={FeedPage} />
        <Route path="/profile/:userId" component={ProfilePage} />
        <Route path="/people" component={PeoplePage} />
        <Redirect to='/register' />
      </Switch>
      <Footer />
    </>
  )
}


