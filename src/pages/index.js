import React from "react"
import { Link } from "gatsby"

import { SEO, Jumbo } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <Link to="/gracias/">Go to gracias</Link>
  </>
)

export default IndexPage
