
import './App.css';
import FoodCategory from './component/FoodCategory';
import './Fonts.css';
import Meals from './component/Meals';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import RecipePage from './component/RecipePage';

function App() {
  return (
    <Router>
      {/* <NavBar/> */}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<FoodCategory/>}/>
          <Route exact path="/meals" element={<Meals/>}/>
          <Route exact path="/recipe" element={<RecipePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
