import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 全部一起引入
// import Hello from "./hello";
// import Hi from "./hi";

// 动态加载
import Loadable from "@loadable/component";

const Loading = <div> Loading...</div>;

const Hello = Loadable(
  () => import(/* webpackChunkName: "hello" */ "./hello"),
  {
    fallback: Loading
  }
);

const Hi = Loadable(() => import(/* webpackChunkName: "hi" */ "./hi"), {
  fallback: Loading
});

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/hi">Hi</Link>
        </li>
      </ul>
      <Route path="/hello" component={Hello} />
      <Route path="/hi" component={Hi} />
    </Router>
  );
}
