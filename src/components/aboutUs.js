import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {pluck, split, slice, compose, prop, sortBy} from 'ramda'

const rotateRight = (a) => {
  const lastIndex = a.length - 1
  return [a[lastIndex], ...slice(0, lastIndex, a)]
}

const sortByLastName = sortBy(
  compose(rotateRight, split(' '), prop('name'), prop('frontmatter'))
)

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      people: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)

  const people = sortByLastName(pluck('node', data.people.edges))

  return (
    <section>
      <h2>About Oncoming Productions</h2>

      <p>
        Oncoming Productions is a Minneapolis-based stage company dedicated to
        creating theater in a dark vein, focusing on movement, light, and sound.
      </p>

      <h3 className="member-heading">The Company</h3>

      <ul className="member-list">
        {people.map((person) => (
          <li className="member-item" key={person.id}>
            {person.frontmatter.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutUs
