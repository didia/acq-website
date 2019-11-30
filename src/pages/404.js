import React from "react";

import { MainLayout } from "../components/public";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <MainLayout
    render={() => (
      <>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    )}
  />
);

export default NotFoundPage;
