import React from 'react';
// packages
import { BrowserRouter } from "react-router-dom";
// routes
import ROUTES, { RenderRoutes } from "./routes";
// components
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar routes={ROUTES} />
            <RenderRoutes routes={ROUTES} />
        </BrowserRouter>
    </div>
  );
}

export default App;
