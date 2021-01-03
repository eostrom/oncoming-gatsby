import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const CurrentShow = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "BlightChristmas_site.png"}) {
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
          <span>Blight Christmas</span>
          <a className="button" href="https://paypal.me/pools/c/8vIP67G5gq">
            DONATE
          </a>
          {/*<span className="subhead"> at the Twin Cities Horror Festival</span>*/}
        </h2>

        <p>
          Just because we’re all apart this holiday, that doesn’t mean we can’t
          get scared together. Welcome to Blight Christmas: A Horror Holiday
          Together… a spooky yet festive variety show for your ears, featuring
          drama, prose, verse, and song from some of the finest creators in the
          Twin Cities horror theater community and beyond.
        </p>

        <p>Featuring work by:</p>

        <ul>
          <li>Amnesia Wars Productions</li>
          <li>Big Spooky Radio Christmastime</li>
          <li>The Champagne Drops</li>
          <li>Eric Thompson</li>
          <li>LandmanLand</li>
          <li>Market Garden Theater</li>
          <li>Oncoming Productions</li>
          <li>Reverend Matt’s Monster Science</li>
          <li>Sad Holiday</li>
          <li>Special When Lit</li>
          <li>Tom Reed</li>
          <li>The Winding Sheet Outfit</li>
        </ul>

        <p>and produced in collaboration with Hot Chocolate Media.</p>

        <div className="show-info">
          <div className="show-info-item">
            <strong>LISTEN NOW:</strong>{' '}
            <a href="http://www.hotchocolatemedia.net/blight-christmas">
              http://www.hotchocolatemedia.net/blight-christmas
            </a>
          </div>
        </div>

        <p>
          <a className="button" href="https://paypal.me/pools/c/8vIP67G5gq">
            DONATE
          </a>
        </p>

        <p>
          All donations will be shared among the contributing companies to
          support their continued work.
        </p>
      </section>
    )}
  />
)

export default CurrentShow
