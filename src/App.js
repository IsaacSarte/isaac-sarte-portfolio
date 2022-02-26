import React from 'react';
import MouseTrail from "@pjsalita/react-mouse-trail";

// Style Components
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import {lightTheme} from './components/Themes.jsx';

// Routes
import { Route, Switch, useLocation } from 'react-router-dom';

// Components
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Comments from './components/Comments.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

import Games from './components/Games';
import Music from './components/Music';

// Framer Motion
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const location = useLocation();

  const config = {
    color: "#b81e1e",
    idleAnimation: true,
    idleAnimationCount: 10,
    inverted: true,
    size: 15,
    trailCount: 20,
  }

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
      <MouseTrail {...config} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/comments" component={Comments}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/about-games" component={Games}/>
            <Route exact path="/about-music" component={Music}/>
        </Switch>
      </AnimatePresence>

      </ThemeProvider>
    </>
  )
}

export default App;