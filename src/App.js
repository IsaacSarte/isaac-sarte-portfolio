import React from 'react'

// Style Components
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import {lightTheme} from './components/Themes.jsx';

// Routes
import { Route, Switch } from 'react-router-dom';

// Components
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Comments from './components/Comments.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/skills" component={Skills}/>
        </Switch>

      </ThemeProvider>
    </>
  )
}

export default App;