import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const CurrentShow = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "geminae-2018.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 820, traceSVG: {blackOnWhite: false}) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className="banner"
          alt=""
        />

        <h2>
          Geminae
          <span className="subhead"> at the Twin Cities Horror Festival</span>
        </h2>

        <p>
          <b>
            The 2018 MN Fringe Festival horror hit is back, new and improved!
          </b>{' '}
          A routine mission goes awry when astronaut Cassie Matheson sees
          something impossible in her shuttle. At mission control, her sister
          Helen fights to bring her home. When the unthinkable happens, they
          learn just how unbreakable the bond between them is, with chilling
          consequences.
        </p>

        <div className="show-info">
          <div className="show-info-item">
            <strong>Dates:</strong> October 24th to November 3rd, 2019
          </div>

          <div className="show-info-item">
            <strong>Place:</strong>{' '}
            <a href="https://southerntheater.org">The Southern Theatre,</a> 1420
            S. Washington Ave., Minneapolis, MN 55454
          </div>

          <div className="show-info-item">
            <strong>Tickets:</strong> Festival passes available now
          </div>
        </div>

        <p>
          <a
            className="button"
            href="http://www.tchorrorfestival.com/lineup-and-tickets1.html"
          >
            BUY A PASS
          </a>
        </p>
      </section>
    )}
  />
)

export default CurrentShow
