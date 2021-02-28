import React from 'react';
import {
    Switch,
    Link,
    Route,
    useLocation,
} from "react-router-dom";
import '../../App.css';
import Education from '../Education/Education';
import Jobs from '../Jobs/Jobs';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Aside from '../Aside/Aside';
interface  PropsInterface {
  history?: object,
};
function Layout (props:PropsInterface) {
  console.log("props",props)
  let location = useLocation();
  console.log("location", location)
  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="app-container">
          <header className="header">
            <nav>
              <ul>
                <li><Link to={`/education`}>Educación</Link></li>
                <li><Link to={`/jobs`}>Experiencia</Link></li>
                <li><Link to={`/portfolio`}>Portafolio</Link></li>
                <li><Link to={`/skills`}>Conocimientos y habilidades</Link></li>
              </ul>
            </nav>
          </header>
          <Aside />
          <main className="main">
            <div className={`${location.pathname === '/skills' ? 'wrapper-no-p white': 'wrapper white'}`}>
                  <Switch>
                      <Route exact path="/education" >
                          <Education />
                      </Route>
                      <Route exact path="/jobs" >
                          <Jobs />
                      </Route>
                      <Route exact path="/portfolio" >
                          <Portfolio />
                      </Route>
                      <Route exact path="/skills" >
                          <Skills />
                      </Route>
                  </Switch>
            </div>
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
