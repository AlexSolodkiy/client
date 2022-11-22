
import Header from './Header'
import Footer from './Footer';
import './App.css';
import Home from './Home';
import Blog from './Blog';
import Contacts from './Contacts';
import Gallery from './Gallery';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div  >
          <Header/>
          <div className="main-content">
            <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/blog'>
                  <Blog/>
              </Route>
              <Route path='/contacts'>
                  <Contacts/>
              </Route>
              <Route path='/gallery'>
                  <Gallery/>
              </Route>
            </Switch>
          </div>
          <Footer/>
    </div>
  );
}

export default App;
