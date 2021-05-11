import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Career from './pages/Career';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Art from './pages/Art';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header 
              title="About me"
            />
            <Home />
          </Route>
          <Route path="/career">
            <Header 
              title="Career"
            />
            <Career />
          </Route>
          <Route path="/certificates">
            <Header 
              title="Certificates"
            />
            <Certificates />
          </Route>
          <Route path="/projects">
            <Header 
              title="Projects"
            />
            <Projects />
          </Route>
          <Route path="/art">
            <Header 
              title="Art"
            />
            <Art />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
