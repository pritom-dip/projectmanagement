import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import routes from "./routes/routes";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {
            routes?.map((route, i) => {
              return route.authentication === true ? (
                <ProtectedRoute
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />

              )
            })
          }

        </Switch>
      </Router>
    </Suspense >
  );
}

export default App;
