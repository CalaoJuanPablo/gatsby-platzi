import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { description } = data.allSite.edges[0].node.siteMetadata
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description} />
      <Link to="/gracias/">Go to gracias</Link>
    </>
  )
}

export default IndexPage
