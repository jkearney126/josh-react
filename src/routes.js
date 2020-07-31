import React from "react";
import { Route, Switch } from "react-router-dom";
// components
import HomeScene from "./scenes/HomeScene";
import Profile from "./scenes/Profile";
import ApiSample from "./scenes/ApiSample";

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: HomeScene, name: "Home" },
    { path: "/profile", key: "ROOT", exact: true, component: Profile, name: "Profile" },
    { path: "/api", key: "ROOT", exact: true, component: ApiSample, name: "Api Sample" }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}
export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}

export default ROUTES;
