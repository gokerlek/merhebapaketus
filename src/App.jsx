import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Layout from "./layouts/main.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
