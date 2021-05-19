import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "./components/shared/Loading";
const Overall = lazy(() => import("./pages/Overall"));
const Products = lazy(() => import("./pages/Products"));
const Distributors = lazy(() => import("./pages/Distributors"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AuthenticatedApp = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Overall} />
            <Route path="/products" component={Products} />
            <Route path="/distributors" component={Distributors} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default AuthenticatedApp;
