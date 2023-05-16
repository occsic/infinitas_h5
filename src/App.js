
import React,{useEffect,Suspense} from "react";
import router from "./router";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
const domArr = [];
for (let i = 0; i < router.length; i += 1) {
    const item = router[i];
    domArr.push((
        <Route
            key={i}
            path={item.path}
            exact={item.exact}
            element={item.main}
        />
    ));
}
export default function App() {
  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>{domArr}</Routes>
          </Suspense>
      </Router>
  );
}
