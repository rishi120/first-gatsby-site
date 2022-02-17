import React, { useEffect } from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import * as styles from "../styles/home.module.scss"
import { gsap } from "gsap";

// markup
const IndexPage = ({ data }) => {
  const { designation, name, desciption } = data.site.siteMetadata
  const elementSelectors = [".headingAnimation", ".animateDesignation"];

  const masterTimeline = gsap.timeline({
    defaults: {
      delay: 0.1,
      duration: 0.5,
      clipPath: 'inset(0 0 100% 0)'
    },
  });

  useEffect(() => {
    elementSelectors.map((animateSelectedElements) => {
      masterTimeline.from(animateSelectedElements, {
        y: -50
      });
      return () => {
        masterTimeline.kill();
      }
    });
  }, [])

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 className="font-bold headingAnimation">{name}</h2>
          <h3 className="animateDesignation">{designation}</h3>
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
