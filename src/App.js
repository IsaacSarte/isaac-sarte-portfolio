import React from 'react';

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

// Framer Motion
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/comments" component={Comments}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/skills" component={Skills}/>
        </Switch>
      </AnimatePresence>

      </ThemeProvider>
    </>
  )
}

export default App;