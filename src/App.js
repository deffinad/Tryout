import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import useAuth from "./shared/hooks";

function App() {
  const dispatch = useDispatch()
  const { login } = useAuth()

  const handleLogin = async (payload) => {
    await login(payload);
  }

  useEffect(() => {
    const payload = {
      'username': 'admin',
      'password': 'admin'
    }
    handleLogin(payload)
  }, [])

  return (
    <Router>
      <Layout />
      <Toaster />
    </Router>
  )
}

export default App;