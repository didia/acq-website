import React from "react";
import { MainLayout } from "../components/public";
import SEO from "../components/SEO";
import Login from "../components/auth/Login";

const LoginPage = () => (
  <MainLayout
    render={() => (
      <>
        <SEO title="Se connecter" />
        <Login />
      </>
    )}
  />
);

export default LoginPage;
