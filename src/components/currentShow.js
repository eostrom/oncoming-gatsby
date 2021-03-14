import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const CurrentShow = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "DeadNorth_banner.png"}) {
          childImageSharp {
            fluid(maxWidth: 820, traceSVG: {blackOnWhite: false}) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <section>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className="banner"
          alt=""
        />

        <h2>Dead North</h2>

        <p>
          Dead North, produced by Oncoming Productions and Hot Chocolate Media,
          is horror theater for your ears - lovingly crafted aural chills by
          some of the finest dark-theater makers from the Upper Midwest and
          beyond.
        </p>

        <p>
          Listen now at{' '}
          <a href="https://www.hotchocolatemedia.net/dead-north">
            Hot Chocolate Media
          </a>{' '}
          or wherever you find your podcasts.
        </p>

        <ul className="actions">
          <li>
            <a className="button" href="https://paypal.me/pools/c/8xIL7PIg12">
              one-time donation
            </a>
          </li>
          <li>
            <a className="button" href="https://www.patreon.com/deadnorth">
              become a supporter
            </a>
          </li>
        </ul>
      </section>
    )}
  />
)

export default CurrentShow
