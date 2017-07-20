import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory,IndexRoute } from 'react-router';

import * as router from 'react-router';
// console.log('router', router);

import Main from './components/Main';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import NoMatch from './components/NoMatch';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
alert("dsgfdgdgfd")
export default class App extends React.Component {

  render () {

    return (<div>
              <Router history={hashHistory}>
                  <Route path='/' component={Main} >
                     <IndexRoute component={StudentList} />

                    <Route path='/list' component={StudentList} />
                    <Route path='/form' component={StudentForm}>
                        <Route path='/form/:id' component={StudentForm} />
                    </Route>
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />

                    <Route path='*' component={NoMatch} />
                  </Route>
              </Router>
        </div>)
  }

}




ReactDOM.render(<App />, document.getElementById('container'));
