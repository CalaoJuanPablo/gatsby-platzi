import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function Gracias() {
  return (
    <React.Fragment>
      <SEO title="Compra existosa" />
      <Purchase>
        <h2>Compra existosa</h2>
        <p>Espero que disfrutes tu swag. Lúcelo con orgullo</p>
        <p>¡Te esperamos de vuelta! Nunca pares de aprender</p>
        <span role="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </React.Fragment>
  )
}
