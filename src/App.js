import React from "react";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout />
      <Toaster />
    </Router>
  );
}

export default App;
