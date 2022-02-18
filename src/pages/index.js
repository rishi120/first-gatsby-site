import React, { useEffect } from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import * as styles from "../styles/home.module.scss"
import { homePageAnimation } from "../gsap-animation";

// markup
const IndexPage = ({ data }) => {
  const { designation, name, desciption } = data.site.siteMetadata

  useEffect(() => {
    homePageAnimation(".headingAnimation", ".animateDesignation", ".animateDescription", ".animateButton");
  }, [])

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 className="font-bold headingAnimation">{name}</h2>
          <h3 className="animateDesignation">{designation}</h3>
          <p className="animateDescription">{desciption}</p>
          <Link to="/portfolio" className={styles.btn + " animateButton"}>My Portfolio</Link>
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
