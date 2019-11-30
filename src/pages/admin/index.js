import React from "react";

import { AdminLayout, DashboardPage } from "../../components/admin";
import SEO from "../../components/SEO";

const IndexPage = () => (
  <AdminLayout
    render={() => (
      <>
        <SEO
          title="Association des congolais de Québec"
          keywords={[`ACQ`, `Québec`, `Congo`, `Congolais`]}
        />
        <DashboardPage />
      </>
    )}
  />
);

export default IndexPage;
