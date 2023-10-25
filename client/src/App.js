// import logo from "./logo.svg";

import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
