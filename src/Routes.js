import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import StockTransaction from "./components/StockTransaction";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={Register} />
        <Route path="/buy-stock" exact render={() => <StockTransaction transactionType="buy" />} />
        <Route path="/sell-stock" exact render={() => <StockTransaction transactionType="sell" />} />
        <Route component={NotFound} /> {/* Move this to the end */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

