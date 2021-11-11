import { Router, Route, Switch, BrowserRouter } from "react-router-dom"
import { createBrowserHistory } from "history";
import Home from "../pages/Home/Home"
import Item from "../pages/Item/Item";

const Routing = () => {
    return <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={Item} />
        </Switch>
    </BrowserRouter>
}

export default Routing;