import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const CurrentShow = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "FiveFifths-2019-L.png"}) {
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

        <h2>Five Fifths of Mary Poppins</h2>

        <p>
          <b>
            Celebrate 26 Supercalifragilisticexpialidocious Years of Minnesota
            Fringe!
          </b>{' '}
          Join us as five adventurous companies donate their time and talent to
          deliver their spoonful of sugar take on a timeless classic. Featuring
          performances from: Shrieking Harpies, Sheep Theater, Oncoming
          Productions, Javier Morillo, and ALL DAY.
        </p>

        <div className="show-info">
          <div className="show-info-item">
            <strong>Date:</strong> May 6, 2019
          </div>

          <div className="show-info-item">
            <strong>Time:</strong> Doors open at 6:30pm / Show starts at 7:30pm
          </div>

          <div className="show-info-item">
            <strong>Place:</strong> Park Square Theatre, 20 West 7th Place,
            Saint Paul, MN 55102
          </div>

          <div className="show-info-item">
            <strong>Tickets:</strong> $45 in advance / $55 at the door / Free
            for{' '}
            <a href="https://www.minnesotafringe.org/members">
              Fringe with Benefits
            </a>{' '}
            Members
          </div>
        </div>

        <p>
          <a
            className="button"
            href="https://www.minnesotafringe.org/BookingRetrieve.aspx?ID=274659"
          >
            BUY TICKETS
          </a>
        </p>
      </section>
    )}
  />
)

export default CurrentShow
