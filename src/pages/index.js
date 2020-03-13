import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo } from "../components"

export const query = graphql`
	query GET_DATA {
		allSite {
			edges {
				node {
					siteMetadata {
						description
					}
				}
			}
		}

		allStripeSku {
			edges {
			  node {
				id
				price
				product {
				  id
				  name
				  metadata {
					description
					img
					wear
				  }
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
