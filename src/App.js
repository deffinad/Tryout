import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Layout />
      <Toaster />
    </Router>
  )
}

export default App;