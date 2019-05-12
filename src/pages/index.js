import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CurrentShow from '../components/currentShow'
import AboutUs from '../components/aboutUs'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <CurrentShow />

    <AboutUs />

    <section>
      <h2>Contact Us</h2>

      <p>
        <a href="mailto:oncomingpro@gmail.com">oncomingpro@gmail.com</a>
      </p>
    </section>
  </Layout>
)

export default IndexPage
