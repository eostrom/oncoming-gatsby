import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CurrentShow from '../components/currentShow'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <CurrentShow />

    <section>
      <h2>About Oncoming Productions</h2>

      <p>
        Oncoming Productions is a Minneapolis-based stage company dedicated to
        creating theater in a dark vein, focusing on movement, light, and sound.
      </p>

      <h3 className="member-heading">The Company</h3>

      <ul className="member-list">
        <li className="member-item">Mallory Dillon</li>
        <li className="member-item">Sean Dillon</li>
        <li className="member-item">Becky Wilkinson Hauser</li>
        <li className="member-item">Bryce Kalal</li>
        <li className="member-item">Emily Lindholm</li>
        <li className="member-item">Erik Nielsen</li>
        <li className="member-item">Erik Ostrom</li>
        <li className="member-item">Victoria Pyan</li>
        <li className="member-item">Rob Ward</li>
      </ul>
    </section>

    <section>
      <h2>Contact Us</h2>

      <p>
        <a href="mailto:oncomingpro@gmail.com">oncomingpro@gmail.com</a>
      </p>
    </section>
  </Layout>
)

export default IndexPage
