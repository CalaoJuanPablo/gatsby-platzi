const path = require('path')

exports.createPages = async ({graphql, actions}) => {
	const { createPage } = actions
	const productTemplate = path.resolve(`src/templates/product.js`)

	const result = await graphql(`
		query GET_SKUS {
			allStripeSku {
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
	`)

	if (result.errors) {
		throw result.errors
	}

	result.data.allStripeSku.edges.forEach(({node}) => {
		createPage({
			path: `/products/${node.id}`,
			component: productTemplate,
			context: node
		})
	})
}