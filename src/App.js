import React from "react";
//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
//styles
import { GloBalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:movieId" element={<Movie/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <GloBalStyle />
  </Router>
);

export default App;
