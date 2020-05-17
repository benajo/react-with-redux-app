import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import Header from '../common/Header';
import PageNotFound from '../PageNotFound';
import CoursesPage from '../courses/CoursesPage';
import ManageCoursePage from '../courses/ManageCoursePage';
import AuthorsPage from '../authors/AuthorsPage';
import ManageAuthorPage from '../authors/ManageAuthorPage';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course/:slug" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/author/:slug" component={ManageAuthorPage} />
      <Route path="/author" component={ManageAuthorPage} />
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
