import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import * as styles from "../styles/home.module.scss"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Chandan Baruah</h2>
          <h3>Develop & Deploy</h3>
          <p>Software Engineer(UI) based in India.</p>
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
