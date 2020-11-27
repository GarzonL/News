
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsList from './pages/NewsList';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={NewsList}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/AgregarNoticias" component={News}/>
          <Route exact path="/ListaNoticias" component={NewsList}/>
          <Route exact path="/Contacto" component={Contact}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
