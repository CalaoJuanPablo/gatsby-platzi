import React from "react"
import { graphql } from "gatsby"

import { SEO, Jumbo } from "../components"
import {Products} from "../components"

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

		allStripeSku(sort: {fields: product___created}) {
			edges {
				node {
					id
					price
					product {
						id
						created
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
	const products = data.allStripeSku.edges
	console.log(products)
	return (
	  <>
		<SEO title="Home" />
		<Jumbo description={description} />
		<Products products={products} />
	  </>
	)
  }
export default IndexPage
