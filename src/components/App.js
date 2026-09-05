import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './../styles/App.css';
import { ProductsProvider } from "./ProductsContext";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admin">Admin Panel</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/admin" component={AdminPanel} />
            <Route path="/products/:id" component={ProductDetails} />
          </Switch>
        </Router>
      </ProductsProvider>
    </div>
  )
}

export default App
