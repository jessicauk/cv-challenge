import React, {useState, useEffect} from "react";
import { Switch, Link, Route, useLocation, Redirect } from "react-router-dom";
import "../../App.css";
import Education from "../Education/Education";
import Jobs from "../Jobs/Jobs";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Aside from "../Aside/Aside";
interface PropsInterface {
  history?: object;
}
interface Sizes {
  width: number | undefined;
  height: number | undefined;
}
function Layout(props: PropsInterface) {
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: 0,
    height: 0,
  });
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(false)

  useEffect(() => {
    if (windowSize) {
      if (windowSize.width && windowSize.width < 700) {
        const element = document.getElementById('nav-list');
        const toggle = document.getElementById('toggle');
        if (element) element.classList.remove('responsive')
        if (toggle) toggle.classList.remove('toggle-transformed')
      }
    }
  }, [windowSize])

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize()
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const handleClose = () => {
    if(isOpenMenu === true) {
      setIsOpenMenu(!isOpenMenu)
    }
  }
  const onClickToggle = () => {
    const element = document.getElementById('nav-list');
    if (element !== null && element !== undefined) {
      setIsOpenMenu(!isOpenMenu)
      element.classList.toggle('responsive')
    }
  }

  let location = useLocation();
  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="app-container" style={{marginTop: isOpenMenu ? '3em': ''}}>
          <header className="header section-wrapper">
            <i className={`${isOpenMenu === true ? "toggle toggle-transformed": "toggle" }`} id="toggle" onClick={onClickToggle}></i>
            <nav id="nav-list">
              <ul>
                <li className={`${location.pathname === '/education' ? 'active': ''}`}>
                  <Link onClick={handleClose} to={`/education`}>Educación</Link>
                </li>
                <li className={`${location.pathname === '/jobs' ? 'active': ''}`}>
                  <Link onClick={handleClose} to={`/jobs`}>Experiencia</Link>
                </li>
                <li className={`${location.pathname === '/portfolio' ? 'active': ''}`}>
                  <Link onClick={handleClose} to={`/portfolio`}>Portafolio</Link>
                </li>
                <li className={`${location.pathname === '/skills' ? 'active': ''}`}>
                  <Link onClick={handleClose} to={`/skills`}>Conocimientos y habilidades</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Aside />
          <main className="main section-wrapper white">
            <div
              className={`${
                location.pathname === "/skills" ? "wrapper-no-p" : "wrapper"
              }`}
            >
              <Switch>
                <Route exact path="/">
                  <Redirect to="/education"/>
                </Route>
                <Route exact path="/education">
                  <Education />
                </Route>
                <Route exact path="/jobs">
                  <Jobs />
                </Route>
                <Route exact path="/portfolio">
                  <Portfolio />
                </Route>
                <Route exact path="/skills">
                  <Skills />
                </Route>
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
