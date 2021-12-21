import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import * as styles from "../styles/home.module.scss"

// markup
const IndexPage = ({ data }) => {
  const { designation, name, subtitle } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{name}</h2>
          <h3>{subtitle}</h3>
          <p>{designation} based in India.</p>
          <Link to="/portfolio" className={styles.btn}>My Portfolio</Link>
        </div>
        <div className={styles.imgWrapper}>
          <img src="/banner.png" alt="site banner" />
        </div>

      </section>
    </Layout>
  )
}

export default IndexPage
// graphql page query without using useStatic hook
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        designation
        name
        subtitle
      }
    }
  }
`
