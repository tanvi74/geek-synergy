import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Signup from './pages/signup';
import Login from './pages/login';
import MoviePage from './pages/moviePage';


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/movie" component={MoviePage}/>
    </div>
  </Router>
  );
}

export default App;
