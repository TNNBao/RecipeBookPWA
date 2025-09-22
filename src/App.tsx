import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/recipes">Recipes</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>© 2025 RecipeBook</footer>
    </div>
  );
}

export default App;
