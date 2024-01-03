import { Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import './App.css';
import Productpage from './Components/Productpage';
import Login from './Components/Login';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/products" element={<Productpage />} />
          
        </Routes>
    </Router>
  );
}

export default App;