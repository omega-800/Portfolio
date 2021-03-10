import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Career from './components/Career';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Art from './components/Art';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Header 
              title="About me"
              photo=""
            />
            <Home />
          </Route>
          <Route path="/career">
            <Header 
              title="Career"
              photo=""
            />
            <Career />
          </Route>
          <Route path="/certificates">
            <Header 
              title="Certificates"
              photo=""
            />
            <Certificates />
          </Route>
          <Route path="/projects">
            <Header 
              title="Projects"
              photo=""
            />
            <Projects />
          </Route>
          <Route path="/art">
            <Header 
              title="Art"
              photo=""
            />
            <Art />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
