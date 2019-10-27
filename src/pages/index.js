import React from 'react'
import Home from '../components/Home';

import {MainLayout} from '../components/public'
import SEO from '../components/SEO'

const IndexPage = () => (
  <MainLayout render={() => (
    <>
      <SEO title="Association des congolais de Québec" keywords={[`ACQ`, `Québec`, `Congo`, `Congolais`]} />
      <Home />
    </>
  )}/>
);

export default IndexPage;
