import React from 'react';
import './Aside.css';

function Aside() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="app-container">
          <header className="header white">
            <nav>
              <ul>
                <li>Educación</li>
                <li>Experiencia</li>
                <li>Portafolio</li>
                <li>Conocimiento y Habilidades</li>
              </ul>
            </nav>
          </header>
          <aside className="aside white">aside</aside>
          <article className="main white">main</article>
          <footer className="footer white">footer</footer>
        </div>
      </div>
    </div>
  );
}

export default Aside;
