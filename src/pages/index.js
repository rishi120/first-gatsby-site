import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import * as styles from "../styles/home.module.scss"

// markup
const IndexPage = ({ data }) => {
  const { designation, name, desciption } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 className="ext-3xl font-bold">{name}</h2>
          <h3>{designation}</h3>
          <p>{desciption}</p>
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
query MyQuery {
  site {
    siteMetadata {
      desciption
      designation
      name
    }
  }
}
`
