import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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
        <Switch>
          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path="/career">
            <Header/>
            <Career/>
            <Footer/>
          </Route>
          <Route path="/certificates">
            <Header/>
            <Certificates/>
            <Footer/>
          </Route>
          <Route path="/projects">
            <Header/>
            <Projects/>
            <Footer/>
          </Route>
          <Route path="/art">
            <Header/>
            <Art/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
