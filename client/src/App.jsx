import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Succuss from "./pages/Succuss";
import { useSelector } from "react-redux";
import ProductsCards from "./pages/ProductsCards";
import UserDetails from "./pages/UserDetails";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;