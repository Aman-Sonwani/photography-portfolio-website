import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer.components'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route  path='/gallery'>
            <GalleryPage/>
          </Route>
          <Route  path='/blog'>
            <BlogPage/>
          </Route>
          <Route  path='/contact'>
            <ContactPage/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
